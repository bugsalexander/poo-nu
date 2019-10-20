/**
 * This file is part of Poo-NU.
 * This file contains the GraphQL resolver.
 */
 
/**
 * Produces the resolver object for GraphQL
 * @param {Connection} database takes in the database, produces the resolver.
 */
export function gql_resolver(database) {
  return {
    Query: {
      getNearestBathrooms: (args) => getNearestBathrooms(database, args.lat, args.long, args.count),
      getNearestBuildings: (args) => getNearestBuildings(args, args.lat, args.long, args.count),
      getBathroom: (id) => getBathroom(database, args.id)
    },
    Mutation: {
      addBathroom: (args) => addBathroom(database, args.building, args.name, args.description, args.floor, args.male, args.female, args.all_gender, args.handicap_accessible, args.capacity),
      addRating: (args) => addRating(database, args.bathroomId, args.ratingContent),
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
    + "select building_name, bathroom_name, bathroom_floor, bathroom_male, bathroom_female, bathroom_all_gender, "
    + "bathroom_handicap_accessible, bathroom_capacity, ROUND(((SQRT(POWER((building_latitude - "
    + latitude
    + "), 2) + POWER((building_longitude - "
    + longitude 
    + "), 2)) * 10000 / 90) * 3280.4), 0) as ft from Building join Bathroom using (building_id) order by ft asc "
    + limit
    + ";";

  return queryDatabase(database, query);
}

function getNearestBuildings(database, latitude, longitude, count) {
  console.log(args);
  console.log(args.latitude);

  const query = ""
  + "select *, ROUND(((SQRT(POWER((building_latitude - "
  + latitude
  + "), 2) + POWER((building_longitude - "
  + longitude
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft "
  + "from Building order by ft asc limit "
  + count
  + ";";

  return queryDatabase(database, query);
}

function getBathroom(database, bathroom_id) {

  const query = ""
  + "select bathroom_name, bathroom_description, bathroom_floor, bathroom_male, bathroom_female, bathroom_all_gender, bathroom_handicap_accessible, "
  + "bathroom_capacity, building_name from Bathroom join Building using (building_id) where bathroom_id = "
  + bathroom_id
  + ";";
  
  return queryDatabase(database, query);
}

// mutation functions. mutate the database.

function addBathroom(database, building, name, description, floor, male, female, all_gender, handicap_accessible, capacity) {

  const query = ""
  + "call add_bathroom("
  + building
  + name
  + description
  + floor
  + male
  + female
  + all_gender
  + handicap_accessible
  + capacity
  + ");";

  return queryDatabase(database, query);
  
}

function addRating(database, bathroom_id, rating_content, rating_value) {

  const query = ""
  + "call add_rating("
  + bathroom_id
  + rating_content
  + rating_value
  + ");";

  return queryDatabase(database, query);
}

/**
 * Queries the database for a certain query.
 * @param {Connection} database the database
 * @param {string} query the query
 */
function queryDatabase(database, query) {
  return database.connect((err) => {
    if (err) {
      console.log(err);
      return undefined;
    } else {
      return database.query(query, (err, result, fields) => {
        if (err) throw err;
        return reformatBathroomRating(result);
      });
    }
  });
}