const createTrip = `
mutation($name: String!, $user: ID!) {
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

module.exports = { createTrip }