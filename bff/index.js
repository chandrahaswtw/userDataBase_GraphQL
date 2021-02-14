// ENABLING NODE TO READ THE .env files AT THETOP OF ALL
const dotenv = require("dotenv");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const resolvers = require("./resolvers/index");
const typeDefs = require("./typeDefs/index");

// EXPRESS SETTINGS
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// ENV OPTIONS READ
dotenv.config();

// Mongoose
const mongoose = require("mongoose");

// INITIALIZING GRAPHQL
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// BINDING GRAPHQL WITH EXPRESS INSTANCE
apolloServer.applyMiddleware({ path: "/graphQL", app });

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`GraphQL Listening at ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
