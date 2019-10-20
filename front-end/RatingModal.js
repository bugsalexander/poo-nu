import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Overlay } from "react-native-elements";

export default class RatingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.isModalVisible
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Overlay
          isVisible={this.props.isModalVisible}
          onBackdropPress= {this.props.onPress}
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    );
  }
}
