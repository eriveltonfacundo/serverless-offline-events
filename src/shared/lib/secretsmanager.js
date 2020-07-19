'use strict';

const { AWS_REGION, SECRETS_MANAGER_URL } = process.env;

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const sm = new SecretsManager({ region: AWS_REGION, endpoint: SECRETS_MANAGER_URL });

const getSecretValue = (SecretId) => sm.getSecretValue({ SecretId }).promise();

module.exports = { getSecretValue };
