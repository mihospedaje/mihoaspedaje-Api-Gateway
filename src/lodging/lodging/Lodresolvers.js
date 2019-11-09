import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint,entryPointn } from './Lodserver';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL1 = `http://${url}:${port}/${entryPointn}`;
//const URL = `http://3.134.40.79:3030/api/v1/lodging`;
//const URL1 = `http://3.134.40.79:3030/api/v1/lodging/name`;

const Lodresolvers = {
	Query: {
		allLodgings: (_) =>
			getRequest(URL, ''),
		lodgingById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
			lodgingByName: (_, { name }) =>
			getRequest(URL1, name),
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
