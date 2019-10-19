import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Locserver';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://3.132.9.148:3030/api/v1/location`;

const Locresolvers = {
	Query: {
		allLocations: (_) =>
			getRequest(URL, ''),
		locationById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createLocation: (_, { location }) =>
			generalRequest(`${URL}`, 'POST', location),
		updateLocation: (_, { id, location }) =>
			generalRequest(`${URL}/${id}`, 'PUT', location),
		deleteLocation: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Locresolvers;
