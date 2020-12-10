export const createTrip = `
mutation($name: String!, $user: INT!) {
	createTrip( data: { name: $name
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