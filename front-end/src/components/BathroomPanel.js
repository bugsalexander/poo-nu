import React, {Component} from 'react';

import {Text, View, StyleSheet, Card} from 'react-native';
import BathroomScreen from '../../BathroomScreen';

export default class BathroomPanel extends Component {
    static navigationOptions = {
        title: 'BathroomPanelItem'
    };


    // TODO: produce bathroom images dependent on type of bathroom
    // produces a bathroom image depending on the type of bathroom.
    determineBathroomType(b) {

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style = {{alignItems: 'center', width: '100%'}}>
            <Button onPress ={() => navigate('BathroomPage', {name: this.props.bathroomName})}>
            <Text style = {styles.titleText}> {this.props.bathroomName}</Text>
            <Text>{this.props.bathroomAddress}</Text>
            </Button>
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

