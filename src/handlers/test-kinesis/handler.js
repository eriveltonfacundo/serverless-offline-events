const s3 = require('../../shared/lib/s3');

module.exports.process = async (event) => {
    const kinesis = event.Records[0].kinesis;
    console.log('Data', Buffer.from(kinesis.data, 'base64').toString('ascii'));
};
