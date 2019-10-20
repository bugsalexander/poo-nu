import React, {Component} from 'react';

import {SafeAreaView, ActivityIndicator, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';
import {request} from 'graphql-request';
import axios from "axios";
const list = [
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  }
];

export default class BathroomPage extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown', 
        nearestBathrooms: null   
    }

    watchID = null;
    componentDidMount = () => {
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
            this.setState({ lastPosition });
        });

        const nearestBathrooms = this.getNearestBathrooms(20);
        this.setState({
          nearestBathrooms
        });
    }

    getGenderText(male, female, all_gender, handicap) {
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

    getNearestBathrooms = (numBathrooms) => {
    const query = ` 
                query {
                    getNearestBathrooms(lat: ${this.state.lastPosition.x}, long: ${this.state.lastPosition.y}, count: ${numBathrooms}) {
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
                    return result;
                  })
                  .catch(console.error); 
      }

  render() {
    return (
      <View style={{ marginTop: 40, width: "100%", height: "100%" }}>
        <ScrollView
          style={{ flex: 0.8 }}
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
                  genderText={getGenderText(elem.male, elem.female, elem.all_gender, elem.handicap)}
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
    justifyContent: "space-between",
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
