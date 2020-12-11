const createUser = `
query($name: String!, $email: String!, $password: String!) {
	createUser(
        name: $name, 
        email: $email,
        password: $password
    ) {
            _id
            name
            email
	}
}`

module.exports = { createUser }