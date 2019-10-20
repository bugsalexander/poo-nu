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
      getNearestBathrooms: (lat, long, count) => getNearestBathrooms(database, lat, long, count),
      getNearestBuildings: (lat, long, count) => getNearestBuildings(database, lat, long, count),
      getBathroom: (id) => getBathroom(database, id)
    },
    Mutation: {
      addBathroom: (building, name, description, floor, male, female, all_gender, handicap_accessible, capacity) => 
      addBathroom(database, building, name, description, floor, male, female, all_gender, handicap_accessible, capacity),
      addRating: (bathroomId, ratingContent) => addRating(database, bathroomId, ratingContent),
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

  return database.query(query, (err, result, fields) => {
    if (err) throw err;
    return reformatBathroomList(result);
  });
}

function getNearestBuildings(database, latitude, longitude, count) {
  console.log("latitude: " + latitude);
  console.log(latitude);
  console.log("longitude: " + longitude);
  console.log(longitude);
  console.log("count: " + count);
  console.log(count);

  const query = ""
  + "select *, ROUND(((SQRT(POWER((building_latitude - "
  + latitude
  + "), 2) + POWER((building_longitude - "
  + longitude
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft "
  + "from Building order by ft asc limit "
  + count
  + ";";

  return database.query(query, 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBuildingList(result);
  });
}

function getBathroom(database, bathroom_id) {

  const query = ""
  + "select bathroom_name, bathroom_description, bathroom_floor, bathroom_male, bathroom_female, bathroom_all_gender, bathroom_handicap_accessible, "
  + "bathroom_capacity, building_name from Bathroom join Building using (building_id) where bathroom_id = "
  + bathroom_id
  + ";";

  return database.query(query, 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroom(result);
  });
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

  return database.query(query, 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroom(result);
  });
}

function addRating(database, bathroom_id, rating_content, rating_value) {

  const query = ""
  + "call add_rating("
  + bathroom_id
  + rating_content
  + rating_value
  + ");";

  return database.query(query, 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroomRating(result);
  });
}