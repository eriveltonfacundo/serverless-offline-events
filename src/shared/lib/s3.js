'use strict';

const { AWS_REGION, S3_URL, ACCESS_KEY_ID, SECRET_ACCESS_KEY, S3_BUCKET_ENDPOINT } = process.env;

const S3 = require('aws-sdk/clients/s3');
const s3 = new S3({
    region: AWS_REGION,
    endpoint: S3_URL,
    s3ForcePathStyle: true,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
});

const getObject = (Bucket, Key) => s3.getObject({ Bucket, Key }).promise();

module.exports = { getObject };
