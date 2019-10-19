export const userTypeDef = `
type User {
    amount: Int!
    method: String!
    credit_card_id: Int!
    user: {
        user_id: Int!
        name: String!
        lastname: String!
    }
    
}
input UserInput {
    amount: Int!
    method: String!
    credit_card_id: Int!
    user: {
        user_id: Int!
        name: String!
        lastname: String!
    }
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
