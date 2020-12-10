const updateTrip = `
mutation($id: ID!, $name: String!, $user: ID) {
	updateTrip(id: $id, data: { name: $name
        user : {
            connect: $user
        }
    }) {
        _id
        name
        user {
            _id
            name
        }
	}
}`

module.exports = { updateTrip }