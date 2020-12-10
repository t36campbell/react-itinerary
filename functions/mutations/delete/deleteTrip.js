const deleteTrip = `
mutation($id: ID!) {
	deleteTrip(id: $id) {
        _id
	}
}`

module.exports = { deleteTrip }