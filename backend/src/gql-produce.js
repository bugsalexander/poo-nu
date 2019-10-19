import { graphql } from "graphql";

export const resolvers = {
  Query: {
    getBathrooms: () => nearestxbathrooms(10),
    getBuildings: () => nearestxbuildings(1)
  }
}

/**
 * test function to produce bathrooms
 * @param {*} numBathrooms 
 */
function nearestxbathrooms(numBathrooms) {
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

/**
 * 
 */
function nearestxbuildings(numBuildings) {
  return [

  ];
}