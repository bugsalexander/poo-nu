import { ApolloServer } from 'apollo-server';
import { typeDefs } from './gql-schema';
import { gql_resolver } from './gql-resolvers'
import { createConnection } from 'mysql';
import { readFileSync } from 'fs';

/**
 * This file is part of Poo-NU
 */
 
// tries to connect to the database
const login = JSON.parse(readFileSync("./database/mysql_login.txt"));
let database = createConnection(login);
database.connect((err) => {
  if (err) {
    console.log(err);
    return undefined;
  } else {
    return database;
  }
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