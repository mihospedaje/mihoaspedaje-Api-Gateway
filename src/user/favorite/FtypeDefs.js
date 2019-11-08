export const favoriteTypeDef = `
type Favorite {
    id: Int!
    user_id: Int!
    lodging_id: Int!
   
}
input FavoriteInput {
    user_id: Int!
    lodging_id: Int!
}`;

export const favoriteQueries = `
    allFavorites: [Favorite]!
    favoriteById(id: Int!): Favorite!
`;

export const favoriteMutations = `
    createFavorite(favorite: FavoriteInput!): Favorite!
    deleteFavorite(id: Int!): Int
`;
