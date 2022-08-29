package config

import (
	"errors"
	"fmt"
	"gopkg.in/yaml.v2"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type VaultServiceConfig struct {
	VaultServerAddress               string `yaml:"vaultServerAddress"`
	OnboardingRoleID                 string `yaml:"onboardingRoleID"`
	OnboardingSecretID               string `yaml:"onboardingSecretID"`
	ReadOnlyRoleID                   string `yaml:"readOnlyRoleID"`
	ReadOnlySecretID                 string `yaml:"readOnlySecretID"`
	OffboardingSvcRoleId             string `yaml:"offboardingSvcRoleId"`
	OffboardingSvcSecretId           string `yaml:"offboardingSvcSecretId"`
	TopmostParentNamespace           string `yaml:"topmostParentNamespace"`
	SecretEngineType                 string `yaml:"secretEngineType"`
	SecretKey                        string `yaml:"secretKey"`
	SecretValue                      string `yaml:"secretValue"`
	KeyValueSecretEngineMountPath    string `yaml:"keyValueSecretEngineMountPath"`
	KvSecretEnginePathForAWSCreds    string `yaml:"kvSecretEnginePathForAWSCreds"`
	KvSecretEnginePathForAzureCreds  string `yaml:"kvSecretEnginePathForAzureCreds"`
	KvSecretEnginePathForGithubToken string `yaml:"kvSecretEnginePathForGithubToken"`
	SysNamespaceMountPath            string `yaml:"sysNamespaceMountPath"`
	InternalNamespacePath            string `yaml:"internalNamespacePath"`
	ExternalNamespacePath            string `yaml:"externalNamespacePath"`
	TenantBeingOnboarded             string `yaml:"tenantBeingOnboarded"`
	GithubPersonalAccessToken        string `yaml:"githubPersonalAccessToken"`
}

func GetConfigFileName(profile string) string {
	log.Printf("Loading config file for %s environment", profile)
	switch strings.ToLower(profile) {
	case "local":
		return "./config/config-local.yml"
	}
	return "./config/config"
}

func RetrieveConfigFile(profile string) (VaultServiceConfig, error) {
	p := GetConfigFileName(profile)
	if p == "" {
		return VaultServiceConfig{}, errors.New("could not load configuration file for profile:" + profile)
	}

	absPath, err := filepath.Abs(p)
	if err != nil {
		return VaultServiceConfig{}, err
	}

	c, err := LoadConfig(absPath)
	if err != nil {
		return VaultServiceConfig{}, err
	}

	return c, nil
}

func LoadConfig(path string) (VaultServiceConfig, error) {
	contents, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Printf("could not load config file %s", path)
		return VaultServiceConfig{}, fmt.Errorf("could not load configuration file (%s): %v", path, err.Error())
	}

	// Decode the configuration from YAML
	var config VaultServiceConfig
	err = yaml.Unmarshal(contents, &config)
	if err != nil {
		fmt.Printf("could not parse config file %s", path)
		return VaultServiceConfig{}, fmt.Errorf("unable to parse configuration file (%s): %v", path, err.Error())
	}

	loadEnv(config)

	return config, nil
}

func loadEnv(config VaultServiceConfig) {
	// Set these environment values in Kubernetes yaml files or docker-compose file to over write.
	// Read environment values. if not given, use default, for now use default
	config.VaultServerAddress = getEnvStr("VAULT_ADDR", config.VaultServerAddress)
}

// Function GetEnvStr is os.getenv with default value.
// If environment value is not set for key, it returns default value as string.
func getEnvStr(key string, fallback string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return fallback
	}
	return value
}
