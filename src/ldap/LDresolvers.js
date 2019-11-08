import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointLu, entryPointLa,entryPointAdu,entryPointAda,entryPointV } from './LDserver';

/*const URLLu = `http://${url}:${port}/${entryPointLu}`;
const URLLa = `http://${url}:${port}/${entryPointLa}`;
const URLAdu = `http://${url}:${port}/${entryPointAdu}`;
const URLAda = `http://${url}:${port}/${entryPointAda}`;
const URLV = `http://${url}:${port}/${entryPointV}`;
*/
const URLLu = `http://localhost:3000/auth`;
const URLLa = `http://localhost:3000/authAdmin`;
const URLAdu = `http://localhost:3000/add`;
const URLAda = `http://localhost:3000/addAdmin`;
const URLV = 'http://localhost:3000/validate';
const LDresolvers = {
	Query: {
	},
	Mutation: {
		loginUser: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLLu}`, 'POST', credentials);
			return res
		},
		loginAdmin: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLLa}`, 'POST', credentials)
			return res
		},
		createUserld: (_, { user }) =>
			generalRequest(`${URLAdu}`, 'POST', user),
		createAdmin: (_, { user }) =>
			generalRequest(`${URLAda}`, 'POST', user),
		
		validate: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLV}`, 'POST', credentials)
			return res
		}	
	}
};

export default LDresolvers;