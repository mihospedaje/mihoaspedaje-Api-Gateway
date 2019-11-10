import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint,entryPointe } from './Userver';

//const URL = `http://${url}:${port}/${entryPoint}`;
//const URL1 = `http://${url}:${port}/${entryPointe}`;
const URL = `http://localhost:3000/api/v1/users`;
const URL1 = `http://localhost:3000/api/v1/users/email`;

const Uresolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		userByEmail: (_, { email }) =>
			getRequest(URL1, email),
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
