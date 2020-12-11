const { getUser } = require('./queries/getUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { _id: id } = JSON.parse(event.body);
    const variables = { id };
    try {
        const { getUser: gotUser } = await sendRequest(
            getUser,
            variables
        );

        return formattedResponse(200, gotUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};