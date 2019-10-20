/**
 * This file is part of Poo-NU.
 * This file contains the GraphQL resolver.
 */

import { reformatBathroom, reformatBathrooms, reformatBuildings, reformatBathroomRating } from "./sql-to-gql";
 
/**
 * Produces the resolver object for GraphQL
 * @param {Connection} database takes in the database, produces the resolver.
 */
export function gql_resolver(database) {
  return {
    Query: {
      getNearestBathrooms: (bad, args) => getNearestBathrooms(database, args.lat, args.long, args.count),
      getNearestBuildings: (bad, args) => getNearestBuildings(database, args.lat, args.long, args.count),
      getBathroom: (bad, args) => getBathroom(database, args.bathroomId)
    },
    Mutation: {
      addBathroom: (bad, args) => addBathroom(database, args.building_id, args.name, args.description, args.floor, args.male, args.female, args.all_gender, args.handicap_accessible, args.capacity),
      addRating: (bad, args) => addRating(database, args.bathroomId, args.ratingContent, args.ratingValue),
    }
  };
}

// query functions. query the sql database.

/**
 * Gets the nearest arguments.
 * @param {*} database the database
 * @param {number} latitude the latitude
 * @param {number} longitude the longitude
 * @param {number} count the number of bathrooms to retrieve
 */
function getNearestBathrooms(database, latitude, longitude, count) {

  const query = ""
    + "select bathroom_id, building_id, building_name, bathroom_name, bathroom_description, bathroom_floor, bathroom_male, bathroom_female, bathroom_all_gender, "
    + "bathroom_handicap_accessible, bathroom_capacity, ROUND(((SQRT(POWER((building_latitude - "
    + latitude
    + "), 2) + POWER((building_longitude - "
    + longitude 
    + "), 2)) * 10000 / 90) * 3280.4), 0) as ft from Building join Bathroom using (building_id) order by ft asc limit "
    + count
    + ";";

  return queryDatabase(database, query, reformatBathrooms);
}

function getNearestBuildings(database, latitude, longitude, count) {

  const query = ""
  + "select *, ROUND(((SQRT(POWER((building_latitude - "
  + latitude
  + "), 2) + POWER((building_longitude - "
  + longitude
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft "
  + "from Building order by ft asc limit "
  + count
  + ";";

  return queryDatabase(database, query, reformatBuildings);
}

function getBathroom(database, bathroom_id) {

  console.log(bathroom_id);

  const query = ""
  + "select bathroom_id, building_id, bathroom_name, bathroom_description, bathroom_floor, bathroom_male, bathroom_female, bathroom_all_gender, bathroom_handicap_accessible, "
  + "bathroom_capacity, building_name from Bathroom join Building using (building_id) where bathroom_id = "
  + bathroom_id
  + ";";
  
  return queryDatabase(database, query, reformatBathroom);
}

// mutation functions. mutate the database.

function addBathroom(database, building, name, description, floor, male, female, all_gender, handicap_accessible, capacity) {


  const query = ""
  + "call add_bathroom("
  + building + ", "
  + "\"" + name + "\"" + ", "
  + "\"" + description + "\"" + ", "
  + floor + ", "
  + male + ", "
  + female + ", "
  + all_gender + ", "
  + handicap_accessible + ", "
  + capacity
  + ");";

  return queryDatabase(database, query, () => undefined);
  
}

function addRating(database, bathroom_id, rating_content, rating_value) {

  const query = ""
  + "call add_rating("
  + bathroom_id + ", "
  + "\"" + rating_content + "\"" + ", "
  + rating_value
  + ");";

  return queryDatabase(database, query, () => undefined);
}

/**
 * Queries the database for a certain query.
 * @param {Connection} database the database
 * @param {string} query the query
 * @param {*} formatter a formatter function
 */
function queryDatabase(database, query, formatter) {
  return new Promise((resolve, reject) => {
    database.query(query, (err, result, fields) => {
      if (err) {
        reject(err);
      }
      console.log(result);
      console.log("----------------------------------------------------------------------------");
      const formatted = formatter(result);
      console.log(formatted);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      resolve(formatter(result));
    });
  });
}