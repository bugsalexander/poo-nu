import React, {Component} from 'react';

import {Text, View, StyleSheet, Button, Card} from 'react-native';
import BathroomScreen from '../pages/BathroomScreen';
import { Actions } from 'react-native-router-flux';

export default class CommentPanel extends Component {
    static navigationOptions = {
        title: 'Pick a Bathroom'
    };

    // TODO: produce bathroom images dependent on type of bathroom
    // produces a bathroom image depending on the type of bathroom to be displayed.
    determineBathroomType(b) {

    }

    render() {
        return (
        <View style = {{alignItems: 'center', width: '100%'}} >
            <Text>{this.props.commentText}</Text>
            <View style={styles.line} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Avenir',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
        marginTop: 12,
        marginBottom: 12,
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1
      }
});
