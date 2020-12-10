const deleteUser = `
mutation($id: ID!) {
        deleteUser(id: $id) {
                _id
	}
}`

module.exports = { deleteUser }