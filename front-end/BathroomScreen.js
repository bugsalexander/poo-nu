import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Rating, AirbnbRating } from "react-native-elements";
import RatingModal from "./RatingModal";
import { Actions } from "react-native-router-flux";

export default class BathroomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // bathroom: props.bathroom,
      titleText: props.bathroomName,
      lastPos: props.lastPos,// this is the position of the current person
      numReviews: 51,
      count: 0,
      isReviewVisible: false,
      userRating: 0,
      hasReviewed: false
    };
    this.onPress = this.onPress.bind(this);
    this.submit = this.submit.bind(this);
  }

  onPress = () => {
    this.setState({
      isReviewVisible: !this.state.isReviewVisible
    });
  };

  submit(rating) {
    console.log(rating);
    this.setState({
      isReviewVisible: false,
      isSubmitted: true,
      userRating: rating,
      hasReviewed: true
    });

    // make submit rating request
  }


  publishRatingQuery = () => {
    return `
      mutation {
        addRating(bathroomId: ${this.state.bathroomId}, ratingContent: ${this.state.ratingContent}, ratingValue: ${this.state.userRating}) {
            
        }
      }
    `
  }

  render() {
    return (
      <View style={styles.baseText}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
          </Text>
          <TouchableOpacity>
            <Image
              style={{ width: 24, height: 24, marginTop: 2 }}
              source={require("./assets/bookmark.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rating}>
          <View style={styles.rating}>
            <Rating imageSize={20} readonly startingValue={4.5} />
          </View>

          <Text style={{ paddingLeft: 12, paddingTop: 2.5 }} numberOfLines={4}>
            {this.state.numReviews} Reviews
          </Text>
        </View>
        <View style={styles.line} />
        <View>
          <RatingModal
            submit={this.submit}
            titleText={this.state.titleText}
            onPress={this.onPress}
            isModalVisible={this.state.isReviewVisible}
          />
          <TouchableOpacity disabled={this.state.hasReviewed} onPress={this.onPress}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                width: "75%"
              }}
            >
              <Text style={{ paddingTop: 2 }}>Start a Review...</Text>
              <Rating
                imageSize={20}
                readonly
                startingValue={this.state.userRating}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.smallLine} />

          <TouchableOpacity onPress={() => Alert.alert("Thanks for flushing!")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                width: "20%"
              }}
            >
              <Image
                style={styles.star}
                source={require("./assets/toilet-paper.png")}
              />
              <Text>Flush</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: "Cochin"
    width: "80%",
    flex: 0.9,
    alignSelf: "center"
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  rating: {
    flexDirection: "row"
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 1.5
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  },
  smallLine: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    alignSelf: "center",
    width: "90%"
  }
});