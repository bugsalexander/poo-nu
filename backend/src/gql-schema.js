/**
 * Part of the Poo-NU repository.
 * Contains the Schema for request formats.
 */

import { buildSchema } from "graphql";


 
 /**
  * The Request format for GraphQL. Must exist.
  * @param getBathrooms list of bathrooms
  * @param getBuildings list of buildings
  */
export const Request = buildSchema(`
  type Query {
    getBathrooms: [Bathroom!]!
    getBuildings: [Building!]!
  }
`);

/**
 * A Bathroom is a bathroom.
 * @param bathroom_id a unique id
 * @param building_id the id of the building this bathroom is in
 * @param name the name 
 * @param description the description 
 * @param floor the floor number this bathroom is on
 * @param male is this a male bathroom?
 * @param female is this a female bathroom?
 * @param all_gender is this bathroom allgender?
 * @param handicap_accessible is this bathroom handicap accessible?
 */
export const Bathroom = buildSchema(`
  type Bathroom {
    bathroom_id: Int!
    building_id: Int!
    name: String!
    description: String!
    floor: Int!
    male: Boolean!
    female: Boolean!
    all_gender: Boolean!
    handicap_accessible: Boolean!
  }
`);

/**
 * A Building is a building, with bathroom.
 * @param id the unique id 
 * @param name the name 
 * @param longitude the longitude
 * @param latitude the latitude
 */
export const Building = buildSchema(`
  type Building {
    id: Int!
    name: String!
    longitude: Float!
    latitude: Float!
  }
`);