package main

import (
	"fmt"
	"testing"
)



func TestLoadOnReadSecretsForProdInstance(t *testing.T) {
	client, _ := initializeVaultClient()
	//set login scope to parent (top level name) namespace
	client.SetNamespace(topmostParentNamespace)

	defer track(runningtime("TestLoadOnReadSecretsForProdInstance"))

	for i := 0; i < 1; i++ {

		loginToVault(client, readOnlyRoleID, readOnlySecretID)
		//1. Read secret
		client.SetNamespace(topmostParentNamespace + "/")
		_, err := client.Logical().Read(tenantBeingOnboarded)
		if err != nil {
			fmt.Errorf("unable to read secret: %w", err)
		}
	}

}
