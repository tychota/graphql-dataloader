const { gql } = require("apollo-server");

module.exports = gql`
  type Studio {
    name: String
    developers: [Developer]
  }
`;
