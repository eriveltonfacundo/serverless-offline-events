module.exports.process = async (event) => {
    console.log('Message', JSON.parse(event.Records[0].Sns.Message));
};
