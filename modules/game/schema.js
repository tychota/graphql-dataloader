const { gql } = require("apollo-server");

module.exports = gql`
  type Game {
    name: String
    studio: Studio
  }

  extend type Query {
    game(id: ID!): Game
    games: [Game]
  }
`;
