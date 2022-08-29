package main

import (
	"fmt"
	"log"
	"testing"
)

func TestCreateSecretsForTenant(t *testing.T) {
	err := createSecretsForTenant(tenantBeingOnboarded)
	if err != nil {
		log.Println(fmt.Errorf("unable to create secerts for tenant %s in Vault: %w", tenantBeingOnboarded, err))
	}
}

func TestReadSecretsForTenant(t *testing.T) {
	data, err := readSecretsForTenant(tenantBeingOnboarded)
	if err != nil {
		log.Println(fmt.Errorf("unable to read secerts from Vault: %w", err))
	}
	// data map can contain more than one key-value pair, in this case we're just grabbing one of them
	key := "token"
	value, ok := data[key].(string)
	if !ok {
		log.Println(fmt.Errorf("value type assertion failed for customer: %s %T %#v", tenantBeingOnboarded, data[key], data[key]))
	}
	fmt.Printf("Github token for customer %s is: %s\n", tenantBeingOnboarded, value)
}

func TestGithubAuthWithToken(t *testing.T) {
	githubAuthWithPersonalAccessToken()
}

func TestDeleteTenantNamespace(t *testing.T) {
	err := deleteTenantNamespace(tenantBeingOnboarded)
	if err != nil {
		log.Println(fmt.Errorf("unable to delete namespace: %s %w", tenantBeingOnboarded, err))
	}
}

func TestLoadOnReadSecretsForTenant(t *testing.T) {
	client, _ := initializeVaultClient()
	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)

	defer track(runningtime("TestLoadOnReadSecretsForTenant"))

	for i := 0; i < 10; i++ {

		loginToVault(client, readOnlyRoleID, readOnlySecretID)
		//1. Read secret
		client.SetNamespace(topmostParentNamespace + "/" + tenantBeingOnboarded + "/external")
		_, err := client.Logical().Read(kvSecretEnginePathForGithubToken)
		if err != nil {
			fmt.Errorf("unable to read secret: %w", err)
		}
	}

}

func TestLoadOnReadSecretsForProdInstance(t *testing.T) {
	client, _ := initializeVaultClient()
	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)

	defer track(runningtime("TestLoadOnReadSecretsForProdInstance"))

	for i := 0; i < 10; i++ {

		loginToVault(client, readOnlyRoleID, readOnlySecretID)
		//1. Read secret
		client.SetNamespace(topmostParentNamespace + "/")
		_, err := client.Logical().Read(tenantBeingOnboarded)
		if err != nil {
			fmt.Errorf("unable to read secret: %w", err)
		}
	}

}
