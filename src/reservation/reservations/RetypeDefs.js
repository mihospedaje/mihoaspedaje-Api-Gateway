export const reservationTypeDef = `
type Reservation {
    reservation_id: Int!
    user_id: Int!
    start_date: String!
    end_date: String!
    guest_adult_number: Int!
    guest_children_number: Int!
    is_cancel: Boolean!
}
input ReservationInput {
    user_id: Int!
    start_date: String!
    end_date: String!
    guest_adult_number: Int!
    guest_children_number: Int!
    is_cancel: Boolean!
}`;

export const reservationQueries = `
    allReservations: [Reservation]!
    reservationById(id: Int!): Reservation!
`;

export const reservationMutations = `
    createReservation(reservation: ReservationInput!): Reservation!
    deleteReservation(id: Int!): Int
    updateReservation(id: Int!, reservation: ReservationInput!): Reservation!
`;
