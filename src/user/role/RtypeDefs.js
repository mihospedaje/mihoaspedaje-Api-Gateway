export const roleTypeDef = `
type Role {
    id: Int!
    namerole: String!
   
}
input RoleInput {
    namerole: String!
}`;

export const roleQueries = `
    allRoles: [Role]!
    roleById(id: Int!): Role!
`;

export const roleMutations = `
    createRole(role: RoleInput!): Role!
    deleteRole(id: Int!): Int
    updateRole(id: Int!, role: RoleInput!): Role!
`;
