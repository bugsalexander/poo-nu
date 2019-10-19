import { buildSchema } from "graphql";

/**
 * Part of the Poo-NU repository.
 * Contains the Schema for request formats.
 */
 
export const Request = buildSchema(`
  type Query {
    getBathrooms: [Bathroom!]!
    getBuildings: [Building!]!
  }
`);

export const Bathroom = buildSchema(`
  type Bathroom {
    name: String!
    building: Building!
    description: String!
    floor: Int!
  }
`);

export const Building = buildSchema(`
  type Building {
    longitude: Float!
    latitude: Float!
    rooms: [Bathroom!]!
  }
`);