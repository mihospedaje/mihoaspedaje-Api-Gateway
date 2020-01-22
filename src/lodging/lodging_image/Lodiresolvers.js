import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, entryPointl } from './Lodiserver';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL2 = `http://${url}:${port}/${entryPointl}`;
//const URL = `http://localhost:3030/api/v1/lodging_image`;
//const URL2 = `http://localhost:3030/api/v1/lodging_image/lodging`;
const Lodiresolvers = {
	Query: {
		allLodging_image: (_) =>
			getRequest(URL, ''),
		lodging_imageById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		lodging_imageByLodgingid: (_, { lodging_id }) =>
			getRequest(URL2, lodging_id),
	},
	Mutation: {
		createLodging_image: (_, { lodging_image }) =>
			generalRequest(`${URL}`, 'POST', lodging_image),
		updateLodging_image: (_, { id, lodging_image }) =>
			generalRequest(`${URL}/${id}`, 'PUT', lodging_image),
		deleteLodging_image: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Lodiresolvers;
