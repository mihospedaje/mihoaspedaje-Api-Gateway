export const userTypeDef = `
type User {
    id: Int!
    name: String!
    lastname: String!
    birthdate: String!
    email: String!
    password: String!
    idrole: Int!
}
input UserInput {
    name: String!
    lastname: String!
    birthdate: String!
    email: String!
    password: String!
    idrole: Int!
}`;

export const userQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
`;

export const userMutations = `
    createUser(user: UserInput!): User!
    deleteUser(id: Int!): Int
    updateUser(id: Int!, user: UserInput!): User!
`;
