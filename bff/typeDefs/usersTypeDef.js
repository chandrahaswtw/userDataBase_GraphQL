const {gql} = require("apollo-server-express");

module.exports = gql`
    extend type Mutation {
        signUp(input : signupInput) : User
        login(input : loginInput) : Token
    }

    scalar Date

    input signupInput {
        name : String!
        email : String!
        password : String!
    }

    input loginInput{
        email : String!
        password : String!
    }

    type Token {
        token : String!
    }

    type User {
        id : ID!
        name : String!
        email : String!
        createdAt : Date
        updatedAt : Date
        tasks : [Task]
    }
`