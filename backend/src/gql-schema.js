/**
 * Part of the Poo-NU repository.
 * Contains the Schema for request formats.
 */

import { gql } from 'apollo-server';

 /**
  * The Request format for GraphQL. Must exist.
  * @param getBathrooms list of bathrooms
  * @param getBuildings list of buildings
  */
const Request = gql`
  type Query {
    getBathrooms: [Bathroom!]!
    getBuildings: [Building!]!
  }
`;

/**
 * Mutation to add a bathroom.
 * Users can add bathrooms, but not buildings.
 */
const Mutation = gql`
  type Mutation {
    """
    adds a bathroom.
    """
    addBathroom(
      building: Int, 
      name: String, 
      description: String, 
      floor: Int, 
      male: Boolean, 
      female: Boolean, 
      all_gender: Boolean, 
      handicap_accessible: Boolean
    ): Bathroom
  }
`;

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
const Bathroom = gql`
  type Bathroom {
    """
    A bathroom.
    """
    bathroom_id: Int!
    building_id: Int!
    building_name: String!
    description: String!
    floor: Int!
    male: Boolean!
    female: Boolean!
    all_gender: Boolean!
    handicap_accessible: Boolean!
  }
`;

/**
 * A Building is a building, with bathroom.
 * @param id the unique id 
 * @param name the name 
 * @param longitude the longitude
 * @param latitude the latitude
 */
const Building = gql`
  type Building {
    """
    A building.
    """
    id: Int!
    name: String!
    longitude: Float!
    latitude: Float!
  }
`;

// export the type definitions 
export const typeDefs = [
  Request,
  Mutation,
  Bathroom,
  Building
];