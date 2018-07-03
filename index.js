const { ApolloServer, gql } = require("apollo-server");
const merge = require("lodash.merge");

const DataLoader = require("dataloader");

require("./crade");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const baseQuery = gql`
  type Query {
    hello: String
  }
`;
const typeDefs = [
  baseQuery,
  require("./modules/game/schema"),
  require("./modules/developer/schema"),
  require("./modules/studio/schema")
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const baseResolver = {
  Query: {
    hello: () => "world"
  }
};
const resolvers = merge(
  {},
  baseResolver,
  require("./modules/game/resolver"),
  require("./modules/studio/resolver"),
  require("./modules/developer/resolver")
);

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      loaders: {
        developers: new DataLoader(ids =>
          require("./modules/developer/data").getDevelopersByIds(ids)
        ),
        games: new DataLoader(ids =>
          require("./modules/game/data").getGamesByIds(ids)
        ),
        studios: new DataLoader(ids =>
          require("./modules/studio/data").getStudiosByIds(ids)
        )
      }
    };
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
