import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import { streamResolvers } from "./streams/stream.resolver";

// ! meeans This field must always have a value cannot be null.
const typeDefs = `#graphql
  type Comment {
  id: ID!
  message: String!
}
  type Stream {
  id: ID!
  title: String!
  status: String!
  viewerCount: Int!
    comments: [Comment!]!
  },

   type Query {
    streams: [Stream!]!
    stream(id: ID!): Stream
  }
`;
//

const resolvers = {
  Query: {
    ...streamResolvers.Query,
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("🚀 Gateway running on http://localhost:4000/graphql");
  });
}

startServer();
