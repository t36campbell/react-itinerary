const { updateEvent } = require('./mutations/update/updateEvent');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { _id: id, name, at, description, url, trip } = JSON.parse(event.body);
    const variables = { id, name, at, description, url, trip };
    try {
        const { updateEvent: updatedvent } = await sendRequest(
            updateEvent,
            variables
        );

        return formattedResponse(200, updatedvent);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};