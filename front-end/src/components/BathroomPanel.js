import React, {Component} from 'react';

import {Text, View, StyleSheet, Button, Card} from 'react-native';
import BathroomScreen from '../../BathroomScreen';
import { Actions } from 'react-native-router-flux';

export default class BathroomPanel extends Component {
    static navigationOptions = {
        title: 'Pick a Bathroom'
    };

    // TODO: produce bathroom images dependent on type of bathroom
    // produces a bathroom image depending on the type of bathroom to be displayed.
    determineBathroomType(b) {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style = {{alignItems: 'center', width: '100%'}} >
            <Text onPress ={() => {Actions.info({bathroomName: this.props.bathroomName})}} style = {styles.titleText}> {this.props.bathroomName}</Text>
            <Text>{this.props.bathroomAddress}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

