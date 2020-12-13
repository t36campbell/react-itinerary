const getUser = `
query($id: ID!) {
	getUser(
        id: $id,
    ) {
      _id
      name
      email
      trips {
        data {
          _id
          name
        }
      }
      events {
        data {
          _id
          name
          description
          url
          trip {
              _id
              name
          }
        }
      }
	}
}
`

module.exports = { getUser }