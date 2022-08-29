package main

import (
	"context"
	"cwp-vault/config"
	vault_service "cwp-vault/internal/vault-service"
	"encoding/json"
	"flag"
	"fmt"
	"github.com/google/go-github/github"
	vault "github.com/hashicorp/vault/api"
	auth "github.com/hashicorp/vault/api/auth/approle"
	"golang.org/x/oauth2"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const (
	vaultServerAddress               = "https://us-zsense.zscwp.io:8300"
	onboardingRoleID                 = "ba94a947-485d-3e63-1d3b-7dfa59caa8e6"
	onboardingSecretID               = "ded530c8-24c8-5cf1-f76f-20a8ea0d1542"
	readOnlyRoleID                   = "ba94a947-485d-3e63-1d3b-7dfa59caa8e6"
	readOnlySecretID                 = "ded530c8-24c8-5cf1-f76f-20a8ea0d1542"
	offboardingSvcRoleId             = "512dd9cf-e6b2-1686-ab66-02b24f62f1bc"
	offboardingSvcSecretId           = "7969077b-1fb1-d3b2-df22-4c0083d8aace"
	topmostParentNamespace           = "zpccustomer"
	secretEngineType                 = "kv"
	secretKey                        = "password"
	secretValue                      = "demo1234"
	keyValueSecretEngineMountPath    = "sys/mounts/user-secrets"
	kvSecretEnginePathForAWSCreds    = "user-secrets/data/aws"
	kvSecretEnginePathForGithubToken = "user-secrets/data/github"
	sysNamespaceMountPath            = "sys/namespaces"
	internalNamespacePath            = "sys/namespaces/internal"
	externalNamespacePath            = "sys/namespaces/external"
	tenantBeingOnboarded             = "rakuten"
	githubPersonalAccessToken        = "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"
)

var ()

type TokenSource struct {
	AccessToken string
}

func (t *TokenSource) Token() (*oauth2.Token, error) {
	token := &oauth2.Token{
		AccessToken: t.AccessToken,
	}
	return token, nil
}

func runningtime(s string) (string, time.Time) {
	log.Println("Start:	", s)
	return s, time.Now()
}

func track(s string, startTime time.Time) {
	endTime := time.Now()
	log.Println("End:	", s, "took", endTime.Sub(startTime))
}

func main() {

	log.Println("Starting Vault Service")

	gracefulStop := make(chan error, 2)
	listenForInterrupt(gracefulStop)

	var profile string
	var vaultService vault_service.VaultService

	flag.StringVar(&profile, "profile", "", "Specify a profile other than default.")
	flag.StringVar(&profile, "p", "", "Specify a profile other than default.")

	flag.Parse()

	// Retrieve the configuration file for the given profile
	cfg, err := config.RetrieveConfigFile(profile)
	if err != nil {
		fmt.Errorf("Failed to retrieve configuration file %s  %w", profile, err)
		return
	}

	go func() {
		vaultService = vault_service.NewVaultService(cfg)
		gracefulStop <- vaultService.Run()
	}()

	// Graceful stop catch that handles closing the gRPC connection
	sig := <-gracefulStop // <-- Blocking call
	log.Println(fmt.Printf("Caught Signal: %+v", sig))
	log.Println("Wait for 2 second to finish processing")

	if vaultService != nil {
		go vaultService.Shutdown()
	}
	time.Sleep(2 * time.Second)
}

// this function creates a new namespace under the parent namespace "Tenant1".
// This namespace corresponds to the tenant that is getting onboarded. It also has child
// namespaces - internal, external to store internal and external secrets resp.
func createSecretsForTenant(namespace string) error {
	client, err := initializeVaultClient()
	if err != nil {
		return err
	}

	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)
	_, err = loginToVault(client, onboardingRoleID, onboardingSecretID)
	if err != nil {
		return err
	}

	defer track(runningtime("createSecretsForTenant"))

	//1. Create a new namespace for the customer
	_, err = client.Logical().Write(sysNamespaceMountPath+"/"+namespace, nil)
	if err != nil {
		return fmt.Errorf("unable to create namespace: %w", err)
	}
	client.SetNamespace(topmostParentNamespace + "/" + namespace)

	//2. Create child namespace "internal" for this customer
	_, err = client.Logical().Write(internalNamespacePath, nil)
	if err != nil {
		return fmt.Errorf("unable to create namespace: %w", err)
	}

	//3. Create child namespace "external" for this customer
	_, err = client.Logical().Write(externalNamespacePath, nil)
	if err != nil {
		return fmt.Errorf("unable to create namespace: %w", err)
	}

	//4. Enable KV version 2 secrets engine, mount it at user-secrets
	client.SetNamespace(topmostParentNamespace + "/" + namespace + "/external")
	params := map[string]interface{}{
		"type": secretEngineType,
		"options": map[string]interface{}{
			"version": "2",
		},
	}
	_, err = client.Logical().Write(keyValueSecretEngineMountPath, params)
	if err != nil {
		return fmt.Errorf("unable to enable secrets engine kv2: %w", err)
	}

	//5. Create secrets under user-secrets mount, one each for aws and azure accounts
	params = map[string]interface{}{
		"data": map[string]interface{}{
			secretKey: secretValue,
		},
	}

	//5a. Create secret for AWS
	_, err = client.Logical().Write(kvSecretEnginePathForAWSCreds, params)
	if err != nil {
		return fmt.Errorf("unable to create aws secret: %w", err)
	}

	//5b. Create secret for github token
	params = map[string]interface{}{
		"data": map[string]interface{}{
			"token": githubPersonalAccessToken,
		},
	}
	_, err = client.Logical().Write(kvSecretEnginePathForGithubToken, params)
	if err != nil {
		return fmt.Errorf("unable to create azure secret: %w", err)
	}

	return err
}

func readSecretsForTenant(namespace string) (map[string]interface{}, error) {
	defer track(runningtime("readSecretsForTenant"))

	client, err := initializeVaultClient()
	if err != nil {
		return nil, err
	}

	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)
	_, err = loginToVault(client, readOnlyRoleID, readOnlySecretID)
	if err != nil {
		return nil, err
	}

	//1. Read aws account secret
	client.SetNamespace("Tenant1/" + namespace + "/external")
	secret, err := client.Logical().Read(kvSecretEnginePathForAWSCreds)
	if err != nil {
		return nil, fmt.Errorf("unable to read secret: %w", err)
	}

	data, ok := secret.Data["data"].(map[string]interface{})
	if !ok {
		return nil, fmt.Errorf("data type assertion failed for customer: %s %T %#v", namespace, secret.Data["data"], secret.Data["data"])
	}

	//2. Read github token
	client.SetNamespace("Tenant1/" + namespace + "/external")
	secret, err = client.Logical().Read(kvSecretEnginePathForGithubToken)
	if err != nil {
		return nil, fmt.Errorf("unable to read secret: %w", err)
	}

	data, ok = secret.Data["data"].(map[string]interface{})
	if !ok {
		return nil, fmt.Errorf("data type assertion failed for customer: %s %T %#v", namespace, secret.Data["data"], secret.Data["data"])
	}

	return data, nil
}

//TODO: customer offboarding - how to handle asset locking scenarios
func deleteTenantNamespace(namespace string) error {
	client, err := initializeVaultClient()
	if err != nil {
		return err
	}
	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)
	_, err = loginToVault(client, offboardingSvcRoleId, offboardingSvcSecretId)
	if err != nil {
		return err
	}
	defer track(runningtime("deleteTenantNamespace"))
	client.SetNamespace(topmostParentNamespace + "/" + namespace)

	_, err = client.Logical().Delete(internalNamespacePath)
	if err != nil {
		return fmt.Errorf("unable to delete namespace: %s %w", "internal", err)
	}

	_, err = client.Logical().Delete(externalNamespacePath)
	if err != nil {
		return fmt.Errorf("unable to delete namespace: %s %w", "external", err)
	}

	log.Println("Deleting " + topmostParentNamespace + "/" + namespace)
	client.SetNamespace(topmostParentNamespace)
	_, err = client.Logical().Delete(sysNamespaceMountPath + "/" + namespace)
	if err != nil {
		return fmt.Errorf("unable to delete namespace: %s %w", "external", err)
	}

	return err
}

func initializeVaultClient() (*vault.Client, error) {
	defer track(runningtime("initializeVaultClient"))
	vaultConfig := vault.DefaultConfig()
	vaultConfig.Address = vaultServerAddress

	client, err := vault.NewClient(vaultConfig)
	if err != nil {
		return nil, fmt.Errorf("unable to initialize Vault client: %w", err)
	}
	return client, err
}

// The Secret returned is the authentication secret, that contains token.
// TOOD: read the vault address, roleID and secretID from env variables
func loginToVault(client *vault.Client, roleId string, secretId string) (*vault.Secret, error) {
	defer track(runningtime("loginToVault"))

	appRoleAuth, err := auth.NewAppRoleAuth(
		roleId,
		&auth.SecretID{FromString: secretId},
	)
	if err != nil {
		return nil, fmt.Errorf("unable to initialize AppRole auth method: %w", err)
	}

	authInfo, err := client.Auth().Login(context.TODO(), appRoleAuth)
	if err != nil {
		return nil, fmt.Errorf("unable to login to AppRole auth method: %w", err)
	}
	if authInfo == nil {
		return nil, fmt.Errorf("no auth info was returned after login")
	}

	return authInfo, err
}

func readSecretForTenantByPath(path string) (map[string]interface{}, error) {
	client, err := initializeVaultClient()
	if err != nil {
		return nil, err
	}
	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)
	_, err = loginToVault(client, readOnlyRoleID, readOnlySecretID)
	if err != nil {
		return nil, err
	}
	defer track(runningtime("readSecretForTenantByPath: " + path))

	//1. Read secret
	secret, err := client.Logical().Read(path)
	if err != nil {
		return nil, fmt.Errorf("unable to read secret: %w", err)
	}

	data, ok := secret.Data["data"].(map[string]interface{})
	if !ok {
		err = fmt.Errorf("data type assertion failed for path: %s %T %#v", path, secret.Data["data"], secret.Data["data"])
	}

	return data, err
}

func githubAuthWithPersonalAccessToken() {

	data, err := readSecretForTenantByPath("/external/user-secrets/data/github")
	key := "token"
	githubToken, ok := data[key].(string)
	if !ok {
		log.Println(fmt.Errorf("value type assertion failed for customer: %s %T %#v", tenantBeingOnboarded, data[key], data[key]))
	}
	defer track(runningtime("githubAuthWithPersonalAccessToken"))

	tokenSource := &TokenSource{
		AccessToken: githubToken,
	}
	oauthClient := oauth2.NewClient(context.TODO(), tokenSource)
	client := github.NewClient(oauthClient)
	user, _, err := client.Users.Get(context.TODO(), "")
	if err != nil {
		fmt.Printf("client.Users.Get() faled with '%s'\n", err)
		return
	}
	_, err = json.MarshalIndent(user, "", "  ")
	if err != nil {
		fmt.Printf("json.MarshlIndent() failed with %s\n", err)
		return
	}
	fmt.Printf("User:%s\n", *user.Name)
}

func listenForInterrupt(errChan chan error) {
	go func() {
		c := make(chan os.Signal)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		errChan <- fmt.Errorf("%s", <-c)
	}()
}
