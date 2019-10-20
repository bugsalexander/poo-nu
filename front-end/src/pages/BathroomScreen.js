import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Rating, AirbnbRating } from "react-native-elements";
import RatingModal from "../components/RatingModal";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import BathroomPanel from "../components/BathroomPanel"

const list = [
  {
    commentText:
      "Best poop of my life. I'm so grateful to have found this poop spot, and I hope that everyone has the opportunity to poop here one day.",
    rating: 5
  },
  { commentText: "Horrible poop.", rating: 1 },
  {
    commentText:
      "Mediocre poop. Quality of the poop was solid, but location is less than ideal.",
    rating: 2.5
  }
];

export default class BathroomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: props.bathroomName,
      lastPos: props.lastPos, // this is the position of the current person
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

  // this.state.bathroomId
  // this.state.ratingContent



  addBathroomRating = () => {
  const query = ` 
              mutation {
                addRating(bathroomId: ${1}, ratingContent: ${""}, ratingValue: ${this.state.userRating}) {
                }
              }`;
      request("http://35.199.57.159", query)
                .then((result) => {
                  return result.data;
                })
                .catch(console.error); 
    }

  render() {
    return (
      <View style={styles.baseText}>
        <ScrollView
          style={{ flex: 0.8 }}
          horizontal={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.titleText}
            </Text>
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 24, marginTop: 2 }}
                source={require("../../assets/bookmark.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rating}>
            <View>
              <Rating imageSize={20} readonly startingValue={4.5} />
            </View>

            <Text
              style={{ paddingLeft: 12, paddingTop: 2.5 }}
              numberOfLines={4}
            >
              {this.state.numReviews} Reviews
            </Text>
          </View>
          <View
            style={
              (styles.specs,
              { flexDirection: "row", justifyContent: "space-between" })
            }
          >
            <Text style={styles.specs}>Gender</Text>
            <Text style={styles.specs}>Handicap-Accessible</Text>
            <Text style={styles.specs}>Capacity</Text>
          </View>
          <View style={styles.line} />
          <View>
            <RatingModal
              submit={this.submit}
              titleText={this.state.titleText}
              onPress={this.onPress}
              isModalVisible={this.state.isReviewVisible}
            />
            <TouchableOpacity
              disabled={this.state.hasReviewed}
              onPress={this.onPress}
            >
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

            <TouchableOpacity
              onPress={() => Alert.alert("Thanks for flushing!")}
            >
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
                  source={require("../../assets/toilet-paper.png")}
                />
                <Text>Flush</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          {/* <View>
            {list.map((elem, i) => {
              return (
                <CommentPanel
                  key={i}
                  commentText={elem.commentText}
                  rating={elem.rating}
                />
              );
            })}
          </View> */}
        </ScrollView>
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
    flexDirection: "row",
    marginTop: 4
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
  },
  specs: {
    marginTop: 6
  }
});
