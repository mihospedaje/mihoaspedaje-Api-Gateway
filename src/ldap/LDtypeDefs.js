export const ldapTypeDef = `
type response {
    success: String!
    data: String!
}
type correct{
    success: Boolean!
    data: String!
    token: String!
}
type only{
    message: String!
}
input UserInputld {
    email: String!
    password: String!
}
input Token{
    token: String
}
input LoginInput {
    email: String!
    password: String!
}`;


export const ldapQueries = `
`;

export const ldapMutations = `
    loginUser(credentials: LoginInput!): correct!
    createUserld(user: UserInputld!): response!
    updatePassword(user: UserInputld!): response!
    validate(credentials: Token): only!
`;