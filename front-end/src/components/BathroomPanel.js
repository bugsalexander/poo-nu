import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Button,
  Card,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Rating, AirbnbRating } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

// determine rating imageSize
var ratingSize = 22;

if (PixelRatio.get() <= 2) {
  ratingSize = 18;
}

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
            bathroomName: this.props.bathroomName,
            rating: this.props.rating,
            numRatings: this.props.numRatings,
            latitude: this.props.latitude,
            longitude: this.props.longitude
          });
        }}
      >
        <View style={{ width: "100%", paddingLeft: 16 }}>
          <Text style={styles.titleText}> {this.props.bathroomName}</Text>
          <Rating
            style={styles.rating}
            imageSize={ratingSize}
            readonly
            startingValue={this.props.rating}
          />
          <View style={{ paddingLeft: 6, paddingRight: 32, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <Text style={{ fontSize: "12rem" }}>{this.props.bathroomAddress}</Text>
            <Text style={{ fontSize: "12rem" }}>{this.props.genderText}</Text>
            <Text style={{ fontSize: "12rem" }}>{this.props.handicapText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  baseText: {
    fontFamily: "Avenir"
  },
  titleText: {
    fontSize: "20rem",
    fontWeight: "bold"
  },
  subText: {
    fontSize: "16rem"
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  },
  rating: {
    paddingLeft: 4,
    marginTop: 4,
    marginBottom: 4
  }
});
