/**
 * This file is part of the Poo-NU repository.
 */
 
/**
 * Reformats an sql bathroom.
 * @param {*} sql_bathroom the sql formatted bathroom.
 */
export function reformatBathroom(sql_bathroom) {
  sql_bathroom = sql_bathroom.bathroom_id ? sql_bathroom : sql_bathroom[0];

  return {
    bathroom_id: sql_bathroom.bathroom_id,
    building_id: sql_bathroom.building_id,
    name: sql_bathroom.bathroom_name,
    description: sql_bathroom.bathroom_description,
    floor: sql_bathroom.bathroom_floor,
    male: sql_bathroom.bathroom_male,
    female: sql_bathroom.bathroom_female,
    all_gender: sql_bathroom.bathroom_all_gender,
    handicap_accessible: sql_bathroom.bathroom_handicap_accessible,
    capacity: sql_bathroom.bathroom_capacity,
    average_rating: 0,
    ratings: [],
    distance: sql_bathroom.ft ? sql_bathroom.ft : 0,
    building_name: sql_bathroom.building_name,
  };
}

/**
 * Reformats a list of bathroom ratings.
 * @param {*} sql_ratings the list of sql ratings
 */
export function reformatBathroomRatings(sql_ratings) {
  function reformatSingleRating(rat) {
    return {
      bathroom_id: rat.bathroom_id,
      rating_content: rat.rating_content,
      rating_value: rat.rating_value,
    }
  }

  const result = [];
  for (let i = 0; i < sql_ratings.length; i += 1) {
    result.push(reformatSingleRating(sql_ratings[i]));
  }
  return result;
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