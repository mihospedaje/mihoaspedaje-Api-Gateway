import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Rserver';

const URL = `http://${url}:${port}/${entryPoint}`;
//const URL = `http://localhost:3000/api/v1/role`;

const Rresolvers = {
	Query: {
		allRoles: (_) =>
			getRequest(URL, ''),
		roleById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createRole: (_, { role }) =>
			generalRequest(`${URL}`, 'POST', role),
		updateRole: (_, { id, role }) =>
			generalRequest(`${URL}/${id}`, 'PUT', role),
		deleteRole: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Rresolvers;
