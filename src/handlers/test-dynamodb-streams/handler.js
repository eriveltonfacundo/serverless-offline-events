const s3 = require('../../shared/lib/s3');

module.exports.process = async (event) => {
    console.log('Data', event.Records[0].dynamodb);
};
