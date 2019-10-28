import React, {Component} from 'react';

import {SafeAreaView, ActivityIndicator, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';
import {request} from 'graphql-request';
import axios from "axios";
import { Router, Scene, Actions } from "react-native-router-flux";

const list = [
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "440 Huntington Ave.",
    genderText: "Male, Female",
    rating: 3.5,
    numRatings: 22,
    latitude: 42.338572,
    longitude: -71.092355
  },
  {
    bathroomName: "West Village H: Floor 2",
    bathroomAddress: "440 Huntington Ave.",
    genderText: "All-Gender",
    handicapText: "Handicap",
    rating: 4,
    numRatings: 14,
    latitude: 42.338572,
    longitude: -71.092355
  },
  {
    bathroomName: "West Village H: Floor 3",
    bathroomAddress: "440 Huntington Ave.",
    genderText: "All-Gender",
    handicapText: "Handicap",
    rating: 4.5,
    numRatings: 10,
    latitude: 42.338572,
    longitude: -71.092355
  },
  {
    bathroomName: "West Village G: Floor 1",
    bathroomAddress: "450 Parker Street",
    genderText: "Male, Female",
    rating: 4,
    numRatings: 4,
    latitude: 42.338275,
    longitude: -71.091984
  },
  {
    bathroomName: "West Village F: Floor B",
    bathroomAddress: "40A Leon Street",
    genderText: "Male, Female",
    handicapText: "Handicap",
    rating: 3.5,
    numRatings: 8,
    latitude: 42.337360,
    longitude: -71.091593
  },
  {
    bathroomName: "Behrakis Center: Floor 4",
    bathroomAddress: "30 Leon Street",
    genderText: "All-Gender",
    handicapText: "Handicap",
    rating: 5,
    numRatings: 51,
    latitude: 42.336712,
    longitude: -71.091654
  },
  {
    bathroomName: "Marino Recreation Center: Floor 1",
    bathroomAddress: "259 Huntington Ave.",
    genderText: "Male, Female",
    rating: 1.5,
    numRatings: 27,
    latitude: 42.340274,
    longitude: -71.090268
  },
  {
    bathroomName: "Stetson West: Floor 1",
    bathroomAddress: "106 St. Stephen St.",
    genderText: "All-Gender",
    rating: 0.5,
    numRatings: 19,
    latitude: 42.340948,
    longitude: -71.090463
  },
  {
    bathroomName: "Speare Hall: Floor 1",
    bathroomAddress: "4 Speare Pl.",
    genderText: "Male, Female",
    handicapText: "Handicap",
    rating: 4,
    numRatings: 11,
    latitude: 42.340704,
    longitude: -71.089698
  }
];


getNearestBathrooms = (lat, long, numBathrooms) => {
  console.log("Fetching nearest bathrooms...");
  const query = ` 
            query {
                getNearestBathrooms(lat: ${lat}, long: ${long}, count: ${numBathrooms}) {
                bathroom_id
                building_id
                name
                building_name
                description
                floor
                male
                female
                all_gender
                handicap_accessible
                }
              }`;
    request("http://35.199.57.159", query)
              .then((result) => {
                console.log(result);
                return result;
              })
              .catch(console.error); 
  }

export default class BathroomPage extends Component {
    state = { 
        initialPosition: {latitude: 0, longitude: 0},
        lastPosition: {latitude: 0, longitude: 0},
        nearestBathrooms:[]
    }

    watchID = null;
    componentDidMount = () => {
      console.log("Component did mount..."); 
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            const nearestBathrooms = getNearestBathrooms(lastPosition.latitude, lastPosition.longitude, 20);

            this.setState({ lastPosition, nearestBathrooms });
        });
    }

    getGenderText(male, female, all_gender) {
      if(all_gender == 1) {
        return "All Gender";
      } else if(female == 1) {
        return "Female";
      } else { 
        return "Male";
      } 
    } 

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }


  render() {
    const nearestBathrooms = getNearestBathrooms(this.state.lastPosition.latitude, this.state.lastPosition.longitude, 20) == undefined ? [] : nearestBathrooms = getNearestBathrooms(this.state.lastPosition.latitude, this.state.lastPosition.longitude, 20);

    return (
      <View style={{ marginTop: 40, width: "100%", height: "100%" }}>
        <ScrollView
          style={{ flex: 0.8 }}
          horizontal={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          {nearestBathrooms.map((elem, i) => {
            return (
              <View>
                <BathroomPanel
                  lastPos={this.state.lastPosition}
                  key={i}
                  bathroomName={elem.bathroomName}
                  bathroomAddress={elem.bathroomAddress}
                  genderText={elem.genderText}
                  handicapText={elem.handicapText}
                  rating={elem.rating}
                  numRatings={elem.numRatings}
                  latitude={elem.latitude}
                  longitude={elem.longitude}
                />
                <View style={styles.line} />
              </View>
            );
          })}
        </ScrollView>
        <GoButton lastPos={this.state.lastPosition} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 30, 
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  },
  button: {
    flex: 0.2,
    marginBottom: 0
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  }
});
