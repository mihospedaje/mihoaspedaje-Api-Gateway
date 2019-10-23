export const paymentTypeDef = `
type Payment {
    amount: Int!
    method: String!
    credit_card_id: Int!
    user_id: Int!
    
}
input PaymentInput {
    amount: Int!
    method: String!
    credit_card_id: Int!
    user_id: Int!
}`;

export const paymentQueries = `
    paymentById(user_id: Int!): Payment!
`;

export const paymentMutations = `
    createPayment(payment: PaymentInput!): Payment!
    updatePayment(user_id: Int!, payment: PaymentInput!): Payment!
`;
