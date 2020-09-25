const s3 = require('../../shared/lib/s3');

module.exports.process = async (event) => {
    const { bucket, object } = event.Records[0].s3;
    const { Body } = await s3.getObject(bucket.name, object.key);
    console.log('Body', Body.toString('utf-8'));
};
