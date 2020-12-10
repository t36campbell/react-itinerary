const updateUser = `
mutation($id: ID!, $name: String!) {
	updateUser( id: $id, data: { name: $name,}) {
                _id
                name
	}
}`

module.exports = { updateUser }