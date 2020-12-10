const Users = `
query {
  allUsers {
    data {
      _id
      name
      trips {
        data {
          _id
          name
          events {
            data {
              _id
              name
              description
              url
            }
          }
        }
      }
    }
  }
}`

module.exports = { Users }