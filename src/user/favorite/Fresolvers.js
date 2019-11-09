import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint, entryPointu } from './Fserver';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL1 = `http://${url}:${port}/${entryPointu}`;
//const URL = `http://localhost:3000/api/v1/favorite`;
//const URL1 = `http://localhost:3000/api/v1/favorite/user`;
const Fresolvers = {
	Query: {
		allFavorites: (_) =>
			getRequest(URL, ''),
		favoriteById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		favoriteByUserid: (_, { user_id }) =>
			getRequest(URL1, user_id),
	},
	Mutation: {
		createFavorite: (_, { favorite }) =>
			generalRequest(`${URL}`, 'POST', favorite),
		deleteFavorite: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Fresolvers;
