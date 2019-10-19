/**
 * This file is part of Poo-NU.
 * This file contains scripts for talking to the mySQL database, which should also be running on this machine.
 */

import { connect } from "mysql";

// scripts go here 

/**
 * Produces the nearest buildings.
 * @param {Connection} database
 * @param {number} latitude the latitude
 * @param {number} longitude the longitude
 * @param {number} count the number of buildings to produce
 */
export function nearestxbuildings(database, latitude, longitude, count) {
  return database.connect(function(err) {
    if (err) {
      console.log(err);
      return {};
    } else {
      return findNearest(database, longitude, latitude, count);
    }
  })
}

/**
 * @param {*} database the database
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {number} count 
 */
function findNearest(database, latitude, longitude, count) {

  return database.query(""
  + "SELECT *, ROUND(((SQRT(POWER((building_latitude - " 
  + latitude 
  + "), 2) + POWER((building_longitude - " 
  + longitude 
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft FROM Building order by ft asc limit " 
  + count 
  + ";", 
    function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return result;
  });
}