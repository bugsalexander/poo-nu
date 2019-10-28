import React, {Component} from 'react';

import {SafeAreaView, ActivityIndicator, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';
import {request} from 'graphql-request';
import axios from "axios";

export default class BathroomPage extends Component {
    state = { 
        initialPosition: {latitude: 0, longitude: 0},
        lastPosition: {latitude: 0, longitude: 0},
        nearestBathrooms:[],
        isLoaded: false
    }

    getNearestBathrooms = async (lat, long, numBathrooms) => {
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

        try {
          const response = await axios.post("http://35.245.94.121/", {
            query, 
            variables: {}
          });
          
          this.setState(() => ({
            isLoaded: true,
            nearestBathrooms: response.data.data.getNearestBathrooms
          }));
        } catch (err) {
          console.log(err);
        }
      }

    watchID = null;
    componentDidMount = () => {
      console.log("Component did mount..."); 
        
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //     const initialPosition = JSON.stringify(position);
        //     this.setState({ initialPosition });
        //     },
        //     (error) => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );
        
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     const lastPosition = JSON.stringify(position);
        //     this.getNearestBathrooms(lastPosition.latitude, lastPosition.longitude, 20);
        //     this.setState({ lastPosition, nearestBathrooms });
        // });
        

      this.getNearestBathrooms(1, 1, 20);
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
    if(!this.state.isLoaded) {
      return <View style={{ marginTop: 40, width: "100%", height: "100%" }}>
        <Text>Loading...</Text>
      </View>
    }
    return (
      <View style={{ marginTop: 40, width: "100%", height: "100%" }}>
        <ScrollView
          style={styles.scroll}
          horizontal={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          {this.state.nearestBathrooms.map((elem, i) => {
            return (
              <View>
                <BathroomPanel
                  lastPos={this.state.lastPosition}
                  key={i}
                  bathroomName={elem.bathroom_name}
                  bathroomAddress={elem.building_name}
                  genderText={this.getGenderText(elem.male, elem.female, elem.all_gender)}
                  handicapText={elem.handicap ? "Handicapped" : ""}
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
  scroll: {
    flex: 9
  },
  button: {
    flex: 1,
    marginBottom: 0
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  }
});
