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
import BathroomPanel from "../components/BathroomPanel";
import MapView from "react-native-maps";
import InnerMap from "../components/InnerMap";
import CommentPanel from "../components/CommentPanel";

const list = [
  {
    commentText:
      "Best experience of my life. I'm so grateful to have found this bathroom, and I hope that everyone has the opportunity to experience what I experienced today.",
    rating: 5
  },
  { commentText: "Horrible bathroom.", rating: 1 },
  {
    commentText:
      "Mediocre bathroom. Very clean, but location is less than ideal.",
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
    this.addBathroomRating = this.addBathroomRating.bind(this);
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

    this.addBathroomRating();
  }

  addBathroomRating = () => {
    console.log("Adding bathroom rating..");
   const query = ` 
             mutation {
                addRating(bathroomId: ${0}, ratingContent: ${"Nice!"}, ratingValue: ${this.state.userRating}) {
                }
              }`;
      request("http://35.199.57.159", query).catch(console.error); 
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
              <Rating imageSize={20} readonly startingValue={this.props.rating} />
            </View>

            <Text
              style={{ paddingLeft: 12, paddingTop: 2.5 }}
              numberOfLines={4}
            >
              {this.props.numRatings} Reviews
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
          <View style={styles.map}>
            <InnerMap latitude={this.props.latitude} longitude={this.props.longitude} lastPos={this.state.lastPos}></InnerMap>
          </View>
          
          <View style={styles.comments}>
            
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}
            >
              Reviews:
            </Text>
            {list.map((elem, i) => {
              return (
                // <CommentPanel
                //   key={i}
                //   commentText={elem.commentText} 
                //   rating={elem.rating}
                // />
                <View>
                  <View style={styles.commentLine} />
                  <CommentPanel
                    key={i}
                    commentText={elem.commentText}
                    rating={elem.rating}
                  />
                </View>
              );
            })}
          </View>
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
  },
  map: {
    width: "100%",
    height: 80
  },
  comments: {
    marginTop: 150
  },
  commentLine: {
    marginTop: 0,
    marginBottom: 16,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  }
});
