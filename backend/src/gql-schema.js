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
const request = gql`
  type Query {
    getNearestBathrooms(lat: Float!, long: Float!, count: Int!): [Bathroom!]!
    getNearestBuildings(lat: Float!, long: Float!, count: Int!): [Building!]!
    getRatings(bathroomId: Int!): [BathroomRating!]!
    getAverageRating(bathroomId: Int!): Float!
  }
`;

/**
 * Mutation to add a bathroom.
 * Users can add bathrooms, but not buildings.
 */
const mutation = gql`
  type Mutation {
    addBathroom(building: Int!, name: String!, description: String!, floor: Int!, male: Boolean!, female: Boolean!, all_gender: Boolean!, handicap_accessible: Boolean!,capacity: Int!): Bathroom!,
    addRating(bathroomId: Int!, ratingContent: String!, ratingValue: Int!),
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
const bathroom_t = gql`
  type Bathroom {
    """
    A bathroom.
    """
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
`;

/**
 * A Bathroom has a rating.
 */
const bathroom_rating_t = gql`
  type BathroomRating {
    bathroom_id: Int!
    rating_content: String!
    rating_value: Int!
  }
`;

/**
 * A Building is a building, with bathroom.
 * @param id the unique id 
 * @param name the name 
 * @param longitude the longitude
 * @param latitude the latitude
 */
const building_t = gql`
  type Building {
    """
    A building.
    """
    building_id: Int!
    building_name: String!
    building_longitude: Float!
    building_latitude: Float!
  }
`;

// export the type definitions 
export const typeDefs = [
  request,
  mutation,
  bathroom_t,
  bathroom_rating_t,
  building_t
];