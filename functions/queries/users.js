export const Users = `
query {
  users {
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
}`

