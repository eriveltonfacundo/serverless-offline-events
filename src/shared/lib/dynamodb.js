'use strict';

const { AWS_REGION, DYNAMODB_URL } = process.env;

const { DocumentClient } = require('aws-sdk/clients/dynamodb');
const documentClient = new DocumentClient({ endpoint: DYNAMODB_URL, region: AWS_REGION });

const create = (tableName, params) => documentClient.put({ TableName: tableName, Item: params }).promise();

const getItem = (tableName, params) =>
    documentClient
        .get({ TableName: tableName, Key: params })
        .promise()
        .then((res) => res.Item);

module.exports = { create, getItem };
