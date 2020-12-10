const { updateUser } = require('./mutations/update/updateUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { _id: id, name } = JSON.parse(event.body);
    const variables = { id, name };
    try {
        const { updateUser: updatedUser } = await sendRequest(
            updateUser,
            variables
        );

        return formattedResponse(200, updatedUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};