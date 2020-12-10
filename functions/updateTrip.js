const { updateTrip } = require('./mutations/update/updateTrip');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { _id: id, name, user } = JSON.parse(event.body);
    const variables = { id, name, user };
    try {
        const { updateTrip: updatedTrip } = await sendRequest(
            updateTrip,
            variables
        );

        return formattedResponse(200, updatedTrip);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};