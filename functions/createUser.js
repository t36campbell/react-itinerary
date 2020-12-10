const { createUser } = require('./mutations/create/createUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { name } = JSON.parse(event.body);
    const variables = { name };
    try {
        const { createUser: createdUser } = await sendRequest(
            createUser,
            variables
        );

        return formattedResponse(200, createdUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};