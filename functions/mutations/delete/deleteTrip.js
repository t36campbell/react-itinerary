export const deleteTrip = `
mutation($id: ID!) {
	deleteTrip(id: $id) {
        _id
	}
}`