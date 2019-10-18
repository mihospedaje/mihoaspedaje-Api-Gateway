import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';
//users
/*import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './user/users/UtypeDefs';
*/
import {
	roleMutations,
	roleQueries,
	roleTypeDef
} from './user/role/RtypeDefs';

//import usersResolvers from './user/users/Uresolvers';
import roleResolvers from './user/role/Rresolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		//usersTypeDef,
		roleTypeDef
	],
	[
		//usersQueries,
		roleQueries
	],
	[
		//usersMutations,
		roleMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		//usersResolvers,
		roleResolvers
	)
});