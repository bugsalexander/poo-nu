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
      getNearestBathrooms: decorateCheckConnection(database, getNearestBathrooms),
      getNearestBuildings: decorateCheckConnection(database, getNearestBuildings),
      getBathroom: decorateCheckConnection(database, getBathroom)
    },
    Mutation: {
      addBathroom: decorateCheckConnection(database, addBathroom),
      addRating: decorateCheckConnection(database, addRating)
    }
  };
}

// scripts go here 

/**
 * Curries the decorater to the inner function. Produces a function requires only the imporant args (not the database).
 * decorator: Database [ ... => Result] => [ ... => Result]
 * @param {Connection} database
 * @param {*} toBeDecorated the function to wrap
 */
export function decorateCheckConnection(database, toBeDecorated) {
  
  // return a new function.
  return function() {

    // save the inner arguments (works properly, tested)
    const innerArgs = arguments;

    // attempt to connect to the database.
    database.connect(function(err) {
      if (err) {
        console.log(err);
        return undefined;
      } else {

        // tack on the database to the front of the inner function's arguments.
        const args = Array.prototype.slice.call(innerArgs); // Make real array from arguments
        args.unshift(database);

        // return the decorated function, curried with the database at the front of the arguments.
        return toBeDecorated.apply(this, args);
      }
    });
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
  + "SELECT *, ROUND(((SQRT(POWER((building_latitude - " 
  + latitude 
  + "), 2) + POWER((building_longitude - " 
  + longitude 
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft FROM Building order by ft asc limit " 
  + count 
  + ";"

  return database.query(query, (err, result, fields) => {
    if (err) throw err;
    return reformatBathroomList(result);
  });
}

function getNearestBuildings(database, latitude, longitude, count) {

  return database.query("", 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroomList(result);
  });
}

function getBathroom(database, latitude, longitude, count) {

  return database.query("", 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroomList(result);
  });
}

// mutation functions. mutate the database.

function addBathroom(database, latitude, longitude, count) {

  return database.query("", 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroomList(result);
  });
}

function addRating(database, latitude, longitude, count) {

  return database.query("", 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return reformatBathroomList(result);
  });
}