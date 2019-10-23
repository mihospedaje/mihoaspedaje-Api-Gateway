import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Lodserver';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://3.132.92.73:3030/api/v1/lodging`;

const Lodresolvers = {
	Query: {
		allLodgings: (_) =>
			getRequest(URL, ''),
		lodgingById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createLodging: (_, { lodging }) =>
			generalRequest(`${URL}`, 'POST', lodging),
		updateLodging: (_, { id, lodging }) =>
			generalRequest(`${URL}/${id}`, 'PUT', lodging),
		deleteLodging: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Lodresolvers;
