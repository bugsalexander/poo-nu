/**
 * This file is part of the Poo-NU repository.
 */
 
/**
 * Reformats an sql bathroom.
 * @param {*} sql_bathroom the sql formatted bathroom.
 */
export function reformatBathroom(sql_bathroom) {
  return {
    bathroom_id: sql_bathroom.bathroom_id,
    building_id: sql_bathroom.building_id,
    name: sql_bathroom.name,
    building_name: sql_bathroom.building_name,
    description: sql_bathroom.description,
    floor: sql_bathroom.floor,
    male: sql_bathroom.male,
    female: sql_bathroom.female,
    all_gender: sql_bathroom.all_gender,
    handicap_accessible: sql_bathroom.handicap_accessible,
    average_rating: sql_bathroom.average_rating,
    ratings: sql_bathroom.ratings
  };
}

/**
 * Reformats a list of sql formatted bathrooms
 * @param {*} sql_bathrooms the list of sql formatted bathrooms to reformat
 */
export function reformatBathrooms(sql_bathrooms) {
  const result = [];
  for (let i = 0; i < sql_bathrooms.length; i += 1) {
    result.push(reformatBathroom(sql_bathrooms[i]));
  }
  return result;
}

/**
 * Reformats sa list of sql formatted buildings.
 * @param {*} sql_buildings the list of buildings to reformat
 */
export function reformatBuildings(sql_buildings) {
  function reformatBuilding(single) {
    return {
      building_id: single.building_id,
      building_name: single.building_name,
      building_latitude: single.building_latitude,
      building_longitude: single.building_longitude,
    };
  }

  const result = [];
  for (let i = 0; i < sql_buildings.length; i += 1) {
    result.push(reformatBuilding(sql_buildings[i]));
  }
  return result;
}

/**
 * Reformats a list of sql formatted ratings.
 * @param {*} sql_rating the sql formatted rating
 */
export function reformatBathroomRating(sql_rating) {
  return {
    bathroom_id: sql_rating.bathroom_id,
    rating_content: sql_rating.rating_content,
    rating_value: sql_rating.rating_value,
  };
}