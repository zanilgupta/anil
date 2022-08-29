package vault_service

import (
	"context"
	vault "github.com/hashicorp/vault/api"
)

type VaultService interface {
	Run() error
	LoginToVault(ctx context.Context, namespace string, roleID string, secretID string) (*vault.Secret, error)
	CreateSecretsForTenant(ctx context.Context, namespace string) error
	ReadSecretsForTenant(ctx context.Context, namespace string) (map[string]interface{}, error)
	ReadSecretForTenantByPath(ctx context.Context, path string) (map[string]interface{}, error)
	DeleteTenantNamespace(ctx context.Context, namespace string) error
	GithubAuthWithPersonalAccessToken(ctx context.Context)
	Shutdown()
}
