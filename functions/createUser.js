const { createUser } = require('./queries/createUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { name, email, password } = JSON.parse(event.body);
    const variables = { name, email, password };
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