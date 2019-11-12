import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint ,entryPointu} from './Reserver';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL1 = `http://${url}:${port}/${entryPointu}`;
//const URL = `http://localhost:3010/api/v1/reservation`;
//const URL1 = `http://localhost:3010/api/v1/reservation/user`;
const Reresolvers = {
	Query: {
		allReservations: (_) =>
			getRequest(URL, ''),
		reservationById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		reservationByUser: (_, { user_id }) =>
			getRequest(URL1, user_id),
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
