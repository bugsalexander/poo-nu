import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Button,
  Card,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Rating, AirbnbRating } from "react-native-elements";

export default class BathroomPanel extends Component {
  static navigationOptions = {
    title: "Pick a Bathroom"
  };

  // TODO: produce bathroom images dependent on type of bathroom
  // produces a bathroom image depending on the type of bathroom to be displayed.
  determineBathroomType(b) {}

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.info({
            lastPos: this.props.lastPos,
            bathroomName: this.props.bathroomName
          });
        }}
      >
        <View style={{ alignItems: "left", width: "100%", paddingLeft: 16 }}>
          <Text style={styles.titleText}> {this.props.bathroomName}</Text>
          <Rating
            style={{ paddingLeft: 4, marginTop: 4, marginBottom: 4 }}
            imageSize={20}
            readonly
            startingValue={3}
          />
          <View style={{ paddingLeft: 6, flexDirection: "row", flex: 1 }}>
            <Text style={{ flex: 0.4 }}>{this.props.bathroomAddress}</Text>
            <Text style={{ flex: 0.3 }}>{this.props.genderText}</Text>
            <Text style={{ flex: 0.3 }}>{this.props.handicapText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Avenir"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  }
});
