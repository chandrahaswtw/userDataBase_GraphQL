const {gql} = require("apollo-server-express");
const tasksTypeDef = require("./tasksTypeDef");
const usersTypeDef = require("./usersTypeDef");

const typeDefs = gql`
 type Query {
     _: String
 }

 type Mutation {
    _: String
}
`

module.exports = [typeDefs, tasksTypeDef, usersTypeDef];