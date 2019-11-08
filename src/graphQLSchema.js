import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

//users
import {
	userMutations,
	userQueries,
	userTypeDef
} from './user/users/UtypeDefs';

import {
	roleMutations,
	roleQueries,
	roleTypeDef
} from './user/role/RtypeDefs';

import {
	favoriteMutations,
	favoriteQueries,
	favoriteTypeDef
} from './user/favorite/FtypeDefs';

//lodging
import {
	locationMutations,
	locationQueries,
	locationTypeDef
} from './lodging/location/LoctypeDefs';

import {
	lodgingiMutations,
	lodgingiQueries,
	lodgingiTypeDef
} from './lodging/lodging_image/LoditypeDefs';

import {
	lodgingMutations,
	lodgingQueries,
	lodgingTypeDef
} from './lodging/lodging/LodtypeDefs';

// reservation
import {
	reservationMutations,
	reservationQueries,
	reservationTypeDef
} from './reservation/reservations/RetypeDefs';

// Billing
import {
	paymentMutations,
	paymentQueries,
	paymentTypeDef
} from './billing/BtypeDefs';

import roleResolvers from './user/role/Rresolvers';
import userResolvers from './user/users/Uresolvers';
import favoriteResolvers from './user/favorite/Fresolvers';
import locationResolvers from './lodging/location/Locresolvers';
import lodgingiResolvers from './lodging/lodging_image/Lodiresolvers';
import lodgingResolvers from './lodging/lodging/Lodresolvers';
import reservationResolvers from './reservation/reservations/Reresolvers';
import paymentResolvers from './billing/Bresolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		
		roleTypeDef,
		userTypeDef,
		favoriteTypeDef,
		locationTypeDef,
		lodgingiTypeDef,
		lodgingTypeDef,
		reservationTypeDef,
		paymentTypeDef
	],
	[
		userQueries,
		roleQueries,
		favoriteQueries,
		locationQueries,
		lodgingiQueries,
		lodgingQueries,
		reservationQueries,
		paymentQueries
	],
	[
		userMutations,
		roleMutations,
		favoriteMutations,
		locationMutations,
		lodgingiMutations,
		lodgingMutations,
		reservationMutations,
		paymentMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		userResolvers,
		roleResolvers,
		favoriteResolvers,
		locationResolvers,
		lodgingiResolvers,
		lodgingResolvers,
		reservationResolvers,
		paymentResolvers

	)
});