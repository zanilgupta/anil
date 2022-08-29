package vault_service

import (
	"context"
	"cwp-vault/config"
	"fmt"
	vault "github.com/hashicorp/vault/api"
	auth "github.com/hashicorp/vault/api/auth/approle"
)

type vaultService struct {
	vaultServiceCfg config.VaultServiceConfig
	vaultClient     *vault.Client
	RunErrorChannel chan error
}

func NewVaultService(cfg config.VaultServiceConfig) VaultService {
	return &vaultService{
		RunErrorChannel: make(chan error),
	}
}

func (v *vaultService) Run() error {
	client, err := initializeVaultClient(v.vaultServiceCfg)
	if err != nil {
		fmt.Errorf("unable to initialize Vault client: %w", err)
		return err
	}
	v.vaultClient = client
	return <-v.RunErrorChannel
}

func initializeVaultClient(cfg config.VaultServiceConfig) (*vault.Client, error) {
	vaultConfig := vault.DefaultConfig()
	vaultConfig.Address = cfg.VaultServerAddress
	client, err := vault.NewClient(vaultConfig)
	if err != nil {
		return nil, fmt.Errorf("unable to initialize Vault client: %w", err)
	}
	return client, err
}

func (v *vaultService) LoginToVault(_ context.Context, namespace string, roleID string, secretID string) (*vault.Secret, error) {
	client := v.vaultClient
	client.SetNamespace(namespace)

	appRoleAuth, err := auth.NewAppRoleAuth(
		roleID,
		&auth.SecretID{FromString: secretID},
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
func (v *vaultService) CreateSecretsForTenant(ctx context.Context, namespace string) error {
	return nil
}
func (v *vaultService) ReadSecretsForTenant(ctx context.Context, namespace string) (map[string]interface{}, error) {
	return nil, nil
}
func (v *vaultService) ReadSecretForTenantByPath(ctx context.Context, path string) (map[string]interface{}, error) {
	return nil, nil
}
func (v *vaultService) DeleteTenantNamespace(ctx context.Context, namespace string) error {
	return nil
}
func (v *vaultService) GithubAuthWithPersonalAccessToken(ctx context.Context) {

}

func (v *vaultService) Shutdown() {
}
