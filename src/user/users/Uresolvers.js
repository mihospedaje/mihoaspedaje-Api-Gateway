import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Userver';

//const URL = `http://${url}:${port}/${entryPoint}`;
const URL = `http://3.132.9.148:3000/api/v1/users`;

const Uresolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Uresolvers;
