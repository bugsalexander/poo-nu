import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Overlay, Input } from "react-native-elements";
import { AirbnbRating } from "react-native-ratings";

export default class RatingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: this.props.titleText,
      isModalVisible: this.props.isModalVisible,
      result: 3.5,
      submit: this.props.submit,
      isSubmitted: false,
      text: ''
    };
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
    this.setState({
      result: rating
    });
  }

  render() {
    return (
      <View style={styles.baseText}>
        <Overlay
          isVisible={this.props.isModalVisible}
          onBackdropPress={this.props.onPress}
        >
          <View style={styles.view}>
            <Text style={styles.titleText}>{this.state.titleText}</Text>

            <AirbnbRating
              count={5}
              reviews={[
                "Snell Third Floor Poop",
                "Unenjoyable Poop",
                "Decent Poop",
                "Fantastic Poop",
                "Jesus Poop"
              ]}
              defaultRating={0}
              size={30}
              reviewSize={20}
              style={styles.rating}
              onFinishRating={this.ratingCompleted}
            />
            {/* <TextInput
              style={{ height: '50%', borderColor: "gray", borderWidth: 1, margin: 16 }}
              onChangeText={text => onChangeText(text)}
              value={value}
              multiline
              numberOfLines = {10}
            /> */}
            <TextInput
              style={{ height: '50%', borderColor: "gray", borderWidth: 1, margin: 16 }}
              placeholder="Leave a review here!"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              multiline
            />
            <Button
              style={{}}
              title="Submit"
              onPress={() => this.state.submit(this.state.result)}
            ></Button>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: "Cochin"
    width: "80%",
    flex: 1,
    justifyContent: "space-between"
  },
  view: {
    flex: 1
  },
  titleText: {
    fontSize: 20,
    marginLeft: 4,
    marginTop: 8
    // flex: 0.1
  },
  rating: {
    // flex: 0.1
  }
});
