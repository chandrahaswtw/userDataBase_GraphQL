const usersResolver = require("./usersResolver");
const {GraphQLDateTime} = require("graphql-iso-date");

const DateResolver = {
    Date : GraphQLDateTime
}

module.exports = [usersResolver, DateResolver];