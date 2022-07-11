import { ApolloServer, gql } from 'apollo-server';

import loadSchemas from './schemaLoader.js';

import 'dotenv/config';
import 'dotenv';


// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];

const jwt = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhY2JmZjg0MDkyYjMxN2IwYTg2ZGQiLCJmaXJzdE5hbWUiOiJQIiwibGFzdE5hbWUiOiJHIiwiZW1haWwiOiJ0cnlAZ21haWwuY29tIiwiaWF0IjoxNjU3NDU3NzMwfQ.RrZWj_PPtz-yOxLJYJYkDZmo1clAPFcvdSBTe77WTbk";



const startServer = async () => {
  const resolvers = {
    Query: {
      jwt: () => jwt
    },
  };

  const typeDefs = await loadSchemas();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });

  const port = process.env.PORT || 4000;

  const { url } = await server.listen({ port: port });
  console.log(`🚀 Server ready at ${url}`);

  return url;
}

startServer();