/**
 * This file is part of Poo-NU.
 * This file contains resolvers for the GraphQL portion of Apollo server.
 */
 
import { nearestxbuildings } from "./sql-connect";

export function gql_resolver(database) {
  return {
    Query: {
      getBathrooms: () => nearestxbathrooms(),
      getBuildings: () => nearestxbuildings(database, 91, 91, 10)
    }
  }
}

/**
 * test function to produce bathrooms
 */
function nearestxbathrooms() {
  return [
    {
      "name": "poo bathroom 1",
      "male": true
    },
    {
      "name": "really cool bahtroom",
      "male": false
    },
    {
      "name": "dillons bathroom 8)",
      "male": true
    }
  ];
}