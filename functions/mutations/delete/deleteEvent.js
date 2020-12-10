const deleteEvent = `
mutation($id: ID!) {
	deleteEvent(id: $id) {
        _id
	}
}`

module.exports = { deleteEvent }