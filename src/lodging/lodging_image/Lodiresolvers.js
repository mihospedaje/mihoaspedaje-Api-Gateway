import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Lodiserver';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://3.132.92.73:3030/api/v1/lodging_image`;

const Lodiresolvers = {
	Query: {
		allLodging_image: (_) =>
			getRequest(URL, ''),
		lodging_imageById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
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
