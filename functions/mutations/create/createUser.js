const createUser = `
mutation($name: String!) {
	createUser( data: { name: $name,}) {
                _id
                name
	}
}`

module.exports = { createUser }