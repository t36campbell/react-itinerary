const { deleteTrip } = require('./mutations/delete/deleteTrip');
const sendRequest = require('./utils/sendRequest');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { _id: id} = JSON.parse(event.body);
    const variables = { id };
    try {
        const { deleteTrip: deletedTrip } = await sendRequest(
            deleteTrip,
            variables
        );

        return formattedResponse(200, deletedTrip);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};