const loginUser = `
query($email: String!, $password: String!) {
	loginUser( 
        email: $email,
        password: $password
    ) { 
        instance
        secret
    }
}`

module.exports = { loginUser }