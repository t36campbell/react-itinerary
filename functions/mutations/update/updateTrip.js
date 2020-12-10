export const createTrip = `
mutation($id: ID!, $name: String!, $user: INT) {
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