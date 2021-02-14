const {gql} = require("apollo-server-express");

module.exports = gql`
    type Task {
        id : ID!
        name : String!
        email : String!
        tasks : [Task]
    }
`