const { createEvent } = require('./mutations/create/createEvent');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { name, at, description, url, trip } = JSON.parse(event.body);
    const variables = { name, at, description, url, trip };
    try {
        const { createEvent: createdEvent } = await sendRequest(
            createEvent,
            variables
        );

        return formattedResponse(200, createdEvent);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};