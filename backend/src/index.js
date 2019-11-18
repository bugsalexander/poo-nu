import { ApolloServer } from 'apollo-server';
import { typeDefs } from './gql-schema';
import { gql_resolver } from './gql-resolvers'
import { readFileSync } from 'fs';
import { getSession } from '@mysql/xdevapi';

/**
 * This file is part of Poo-NU
 */
 
// tries to connect to the database
const login = JSON.parse(readFileSync("./database/mysql_login.txt"));
let database = getSession(login).catch((err) => {
  console.log("Connection to database failed!");
  throw err;
});

// runs the apollo server

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const resolvers = gql_resolver(database);
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});