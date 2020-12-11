const createEvent = `
mutation($name: String!, $at: String, $description: String, $url: String, $trip: ID!) {
	createEvent( data: { name: $name, at: $at, description: $description, url: $url
        trip: { connect: $trip }
    }) {
        _id
        name
        at
        description
        url
        trip {
            _id
            name
        }
	}
}`

module.exports = { createEvent }