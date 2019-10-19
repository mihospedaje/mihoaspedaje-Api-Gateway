export const lodgingTypeDef = `
type Lodging {
    lodging_id: Int!
    host_id: Int!
    lodging_name: String!
    phone_number: Int!
    lodging_type: Int!
    lodging_class: Int!
    is_exclusive: Int!
    is_company: Int!
    guest_number: Int!
    rooms_number: Int!
    beds_number: Int!
    bathrooms_number: Int!
    location_id: Int!
    address: String!
    extra_address: String!
    time_before_guest: Int!
    time_arrive_start: Int!
    time_arrive_end: Int!
    with_wifi: Int!
    with_cable_tv: Int!
    with_air_conditioning: Int!
    with_phone: Int!
    with_kitchen: Int!
    with_cleaning_items: Int!
    price_per_person_and_nigth: Float!
    lodging_description: String!
    lodging_provide: Int!

}
input LodgingInput {
    host_id: Int!
    lodging_name: String!
    phone_number: Int!
    lodging_type: Int!
    lodging_class: Int!
    is_exclusive: Int!
    is_company: Int!
    guest_number: Int!
    rooms_number: Int!
    beds_number: Int!
    bathrooms_number: Int!
    location_id: Int!
    address: String!
    extra_address: String!
    time_before_guest: Int!
    time_arrive_start: Int!
    time_arrive_end: Int!
    with_wifi: Int!
    with_cable_tv: Int!
    with_air_conditioning: Int!
    with_phone: Int!
    with_kitchen: Int!
    with_cleaning_items: Int!
    price_per_person_and_nigth: Float!
    lodging_description: String!
    lodging_provide: Int!
}`;

export const lodgingQueries = `
    allLodgings: [Lodging]!
    lodgingById(lodging_id: Int!): Lodging!
`;

export const lodgingMutations = `
    createLodging(lodging: LodgingInput!): Lodging!
    deleteLodging(lodging_id: Int!): Int
    updateLodging(lodging_id: Int!, lodging: LodgingInput!): Lodging!
`;
