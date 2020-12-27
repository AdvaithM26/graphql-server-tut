// Import apollo server and gql so we can use it in this file
const { ApolloServer, gql } = require("apollo-server");

// Create and instance of ApolloServer with TypeDefs and resolvers
const server = new ApolloServer({
	// typeDefs tell the GraphQL server what data to expect
	// Notice the gql tag, this converts your string into GraphQL strings that can be read by Apollo
	typeDefs: gql`
		type Query {
			hello: String!
			randomNumber: Int!
		}
	`,
	// resolvers tell the server what to return when the client makes a request
	resolvers: {
		Query: {
			hello: () => "Hello world",
			randomNumber: () => Math.round(Math.random() * 10),
		},
	},
});

// Start the server at port 8080
server
	.listen({ port: 8080 })
	.then(({ url }) => console.log(`GraphQL server at ${url}`));
