const { createTrip } = require('./mutations/create/createTrip');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { name, user } = JSON.parse(event.body);
    const variables = { name, user };
    try {
        const { createTrip: createdTrip } = await sendRequest(
            createTrip,
            variables
        );

        return formattedResponse(200, createdTrip);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};