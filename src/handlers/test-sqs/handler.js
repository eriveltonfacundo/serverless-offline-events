module.exports.process = async (event) => {
    const body = JSON.parse(event.Records[0].body);
    console.log('module.exports.process -> body', body);
};

module.exports.error = async (event) => {
    console.log('##################### ERROR', event.Records[0].body);
};
