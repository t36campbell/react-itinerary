export const updateEvent = `
mutation($id: ID!, $name: String!, $at: String, $description: String, $url: String, $trip: INT ) {
	updateEvent(id: $id, data: { name: $name, at: $at, description: $description, url: $url,
        trip: {
            connect: $trip
        }
    }) {
        _id
        name
        at
        description
        url
        trip {
        _id
        name
        user {
                _id
                name
            }
        }
	}
}`