import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Fserver';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://localhost:3000/api/v1/favorite`;

const Fresolvers = {
	Query: {
		allFavorites: (_) =>
			getRequest(URL, ''),
		favoriteById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createFavorite: (_, { favorite }) =>
			generalRequest(`${URL}`, 'POST', favorite),
		deleteFavorite: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Fresolvers;
