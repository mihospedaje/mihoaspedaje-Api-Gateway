export const lodgingiTypeDef = `
type Lodging_image {
    lodging_image_id: Int!
    lodging_id: Int!
    url: String!
}
input Lodging_imageInput {
    lodging_id: Int!
    url: String!
}`;

export const lodgingiQueries = `
    allLodging_image: [Lodging_image]!
    lodging_imageById(id: Int!): Lodging_image!
    lodging_imageByLodgingid(lodging_id: Int!): [Lodging_image]!
`;

export const lodgingiMutations = `
    createLodging_image(lodging_image: Lodging_imageInput!): Lodging_image!
    deleteLodging_image(id: Int!): Int
    updateLodging_image(id: Int!, lodging_image: Lodging_imageInput!): Lodging_image!
`;
