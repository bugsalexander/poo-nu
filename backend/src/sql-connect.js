/**
 * This file is part of Poo-NU.
 * This file contains scripts for talking to the mySQL database, which should also be running on this machine.
 */

import { connect } from "mysql";

// scripts go here 

/**
 * Produces the nearest buildings.
 */
export function nearestxbuildings(database, longitude, latitude, count) {
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
 * @param {number} longitude 
 * @param {number} latitude 
 * @param {number} count 
 */
function findNearest(database, latitude, longitude, count) {

  return database.query(""
  + "SELECT *, ROUND(((SQRT(POWER((building_latitude - " 
  + latitude 
  + "), 2) POWER((building_longitude - " 
  + longitude 
  + "), 2)) * 10000 / 90) * 3280.4), 0) as ft FROM Building order by ft asc limit " 
  + count 
  + ";", 
    function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}