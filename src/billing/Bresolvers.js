import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './Bserver';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://3.132.9.148:3000/api/v1/payment`;

const Bresolvers = {
	Query: {
		paymentById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createPayment: (_, { payment }) =>
			generalRequest(`${URL}`, 'POST', payment),
		updatePayment: (_, { id, payment }) =>
			generalRequest(`${URL}/${id}`, 'PUT', payment)
	}
};

export default Bresolvers;
