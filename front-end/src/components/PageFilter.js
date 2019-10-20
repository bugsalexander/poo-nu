import React, {Component} from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default class BathroomPanel extends Component {

    // TODO: produce bathroom images dependent on type of bathroom
    // produces a bathroom image depending on the type of bathroom.
    determineBathroomType(b) {

    }

    onClick() {
     // TODO:
     // this redirects to the big bathroom page   
    }

    render() {
        return (
        <View style = {{alignItems: 'center', width: '100%'}}>
            <Text style = {styles.titleText}> {this.props.bathroomName}</Text>
            <Text>{this.props.bathroomAddress}</Text>
        </View>
        )
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

