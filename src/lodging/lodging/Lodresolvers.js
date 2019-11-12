import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint,entryPointn,entryPointu } from './Lodserver';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL1 = `http://${url}:${port}/${entryPointn}`;
const URL2 = `http://${url}:${port}/${entryPointu}`;
//const URL = `http://3.134.40.79:3030/api/v1/lodging`;
//const URL1 = `http://3.134.40.79:3030/api/v1/lodging/name`;
//const URL2 = `http://localhost:3030/api/v1/lodging/user`;
const Lodresolvers = {
	Query: {
		allLodgings: (_) =>
			getRequest(URL, ''),
		lodgingById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		lodgingByName: (_, { name }) =>
			getRequest(URL1, name),
		lodgingByUser: (_, { user_id }) =>
			getRequest(URL2, user_id),
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
