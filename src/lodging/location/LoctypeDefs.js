export const locationTypeDef = `
type Location {
    location_id: Int!
    country: String!
    city: String!
    state: String!
}
input LocationInput {
    country: String!
    city: String!
    state: String!
}`;

export const locationQueries = `
    allLocations: [Location]!
    locationById(id: Int!): Location!
`;

export const locationMutations = `
    createLocation(location: LocationInput!): Location!
    deleteLocation(id: Int!): Int
    updateLocation(id: Int!, location: LocationInput!): Location!
`;
