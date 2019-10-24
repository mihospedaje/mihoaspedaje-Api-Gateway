import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './Bserver';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://3.132.9.148:3045/api/v1/payment`;

const Bresolvers = {
	Query: {
		paymentById: (_, { user_id }) =>
			generalRequest(`${URL}/${user_id}`, 'GET'),
	},
	Mutation: {
		createPayment: (_, { payment }) =>
			generalRequest(`${URL}`, 'POST', payment),
		updatePayment: (_, { id, payment }) =>
			generalRequest(`${URL}/${id}`, 'PUT', payment)
	}
};

export default Bresolvers;
