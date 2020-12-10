export const allTrips = `
query{
    allTrips {
      data {
        _id
        name
        user {
             _id
            name
        }
        events {
            data {
                _id
                name
                at
                description
                url
            }
        }
      }
    }
}`