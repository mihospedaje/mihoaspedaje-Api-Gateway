import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointLu,entryPointAdu,entryPointUp,entryPointV } from './LDserver';

const URLLu = `http://${url}:${port}/${entryPointLu}`;
const URLAdu = `http://${url}:${port}/${entryPointAdu}`;
const URLUp = `http://${url}:${port}/${entryPointUp}`;
const URLV = `http://${url}:${port}/${entryPointV}`;
/*
const URLLu = `http://18.190.94.157:3000/auth`;
const URLAdu = `http://localhost:3000/add`;
const URLUp = `http://localhost:3000/update`;
const URLV = 'http://localhost:3000/validate';
*/
const LDresolvers = {
	Query: {
	},
	Mutation: {
		loginUser: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLLu}`, 'POST', credentials);
			return res
		},
		createUserld: (_, { user }) =>
			generalRequest(`${URLAdu}`, 'POST', user),
		updatePassword: (_, { user }) =>
			generalRequest(`${URLUp}`, 'POST', user),
		
		validate: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLV}`, 'POST', credentials)
			return res
		}	
	}
};

export default LDresolvers;