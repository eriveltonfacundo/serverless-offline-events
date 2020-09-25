'use strict';

const { AWS_REGION, SNS_URL } = process.env;

const SNS = require('aws-sdk/clients/sns');
const sns = new SNS({ region: AWS_REGION, endpoint: SNS_URL });

const publish = (event, TopicArn, formatter = JSON.stringify) =>
    sns.publish({ Message: formatter(event), TopicArn }).promise();

module.exports = { publish };
