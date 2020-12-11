const { loginUser } = require('./queries/loginUser');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const variables = { email, password };
    try {
        const { loginUser: loggedInUser } = await sendRequest(
            loginUser,
            variables
        );

        return formattedResponse(200, loggedInUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};