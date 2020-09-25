'use strict';

const { AWS_REGION, SQS_URL } = process.env;

const SQS = require('aws-sdk/clients/sqs');
const sqs = new SQS({ region: AWS_REGION, endpoint: SQS_URL });

const sendMessage = (event, QueueUrl, formatter = JSON.stringify) =>
    sqs.sendMessage({ MessageBody: formatter(event), QueueUrl }).promise();

module.exports = { sendMessage };
