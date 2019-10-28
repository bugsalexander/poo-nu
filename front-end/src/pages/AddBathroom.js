import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CheckBox from "react-native-check-box";
import { Button, Input } from "react-native-elements";
import {request} from 'graphql-request';

/*
const list = [
  { buildingName: "West Village A", buildingID: 1 },
  { buildingName: "West Village B", buildingID: 2 },
  { buildingName: "West Village C", buildingID: 3 },
  { buildingName: "West Village D", buildingID: 4 },
  { buildingName: "West Village E", buildingID: 5 },
  { buildingName: "West Village F", buildingID: 6 },
  { buildingName: "West Village G", buildingID: 7 },
  { buildingName: "West Village H", buildingID: 8 }
];
*/

getBuildings = async (query, data)  => {
  const query = ` 
             query {
                getAllBuildings(count: 82) {
                  building_name
                }
              }`;
      request("http://35.199.57.159", query)
      .then((data) => {
        console.log(data)
        return data;
      }).catch(console.error); 
}

export default class AddBathroom extends Component {
  state = {
      name: null,
      description: null,
      building: null,
      floor: null,
      male: null,
      female: null,
      all_gender: null,
      handicap: null,
      capacity: null,
      buildings: getBuildings()
  };

  submit(name, description, building, floor, gender, handicap, capacity) {
    if (gender == "All Gender") {
      this.setState({
        male: true,
        female: true,
        all_gender: true
      });
    } else if (gender == "Male") {
      this.setState({
        male: true,
        female: false,
        all_gender: false
      });
    } else {
      this.setState({
        male: false,
        female: true,
        all_gender: false
      });
    }

    this.setState({
      name: name,
      description: description,
      building: building,
      floor: floor,
      handicap: handicap,
      capacity: capacity
    });

    const query = ` 
    mutation {
       addBathroom(building_id: ${building}, name:${name}, description:${description}, floor:${floor}, male:${male}, female:${female}, all_gender:${all_gender}, handicap_accessible: ${handicap}, capacity:${capacity}) {
       }
     }`;

    const variables = {}

    this.addBathroom(query, variables); 
  }

  addBathroom = async (query, variables) => {
    console.log("Adding bathroom...");
    const url = '';

      try {
        const response = await axios.post(url, {
          query, 
          variables
        });

        console.log(response.data);

      } catch (err) {
        console.log(error);
      }
  }

  render() {
    // TODO: request building names and fill all of them in here
    const list = ['Richards Hall', 'Ell Hall', 'Curry Student Center', 'Curry Library', 'Dillon Village C', 'St. Stanley St'];

    return (
      <View style={styles.base}>
        <View style={styles.input}>
          <Text style={styles.textInput}>Name:</Text>
          <TextInput containerStyle={{height: '100%'}} placeholder="Enter here..." />
        </View>
        <View style={styles.input}>
          <Text style={styles.textInput}>Description:</Text>
          <TextInput containerStyle={{height: '100%'}} placeholder="Enter here..." />
        </View>
        <View style={styles.input}>
          <Text style={styles.textInput}>Building:</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={list.map((elem, i) => {
              return {label: elem.building_name, value: elem.building_name };
            })}
          />
        </View>
        <View style={styles.input}>
          <Text steyle={styles.textInput}>Floor:</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={list.map((elem, i) => {
              return {label: elem.building_name, value: elem.building_name };
            })}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.textInput}>Gender:</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={list.map((elem, i) => {
              return {label: elem.building_name, value: elem.building_name };
            })}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.textInput}>Handicap Accessible:</Text>
          <CheckBox
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              });
            }}
            isChecked={this.state.isChecked}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.textInput}>Capacity:</Text>
          <TextInput keyboardType={'numeric'} containerStyle={{height: '100%'}} placeholder="Enter here..." />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Button
            title="Submit"
            // onPress={() => this.state.submit(this.state.result)}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: "80%",
    flex: 1,
    justifyContent: "space-evenly",
    alignSelf: "center"
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
