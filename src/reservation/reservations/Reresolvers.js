import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Reserver';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://3.133.13.240:3010/api/v1/reservation`;

const Reresolvers = {
	Query: {
		allReservations: (_) =>
			getRequest(URL, ''),
		reservationById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createReservation: (_, { reservation }) =>
			generalRequest(`${URL}`, 'POST', reservation),
		updateReservation: (_, { id, reservation }) =>
			generalRequest(`${URL}/${id}`, 'PUT', reservation),
		deleteReservation: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Reresolvers;
