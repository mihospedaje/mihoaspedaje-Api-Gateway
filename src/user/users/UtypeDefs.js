export const userTypeDef = `
type User {
    id: Int!
    name: String!
    lastname: String!
    birthdate: String!
    email: String!
    password: String!
    idrole: Int!
    image: String!
}
input UserInput {
    name: String!
    lastname: String!
    birthdate: String!
    email: String!
    password: String!
    idrole: Int!
    image: String!
}`;

export const userQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
    userByEmail(email: String!): User!
`;

export const userMutations = `
    createUser(user: UserInput!): User!
    deleteUser(id: Int!): Int
    updateUser(id: Int!, user: UserInput!): User!
`;
