const allEvents = `
query{
    allEvents {
        data {
            _id
            name
            at
            description
            url
            trip {
            _id
            name
        }
      }
    }
}`

module.exports = { allEvents }