const { deleteUser } = require('./mutations/delete/deleteUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { _id: id} = JSON.parse(event.body);
    const variables = { id };
    try {
        const { deleteUser: deletedUser } = await sendRequest(
            deleteUser,
            variables
        );

        return formattedResponse(200, deletedUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};