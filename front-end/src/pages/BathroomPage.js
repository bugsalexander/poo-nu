import React, {Component} from 'react';

import {SafeAreaView, Text, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';

export default class BathroomPage extends Component {
    render() {
        return (
            <View style={{ marginTop: 40, width: '100%', height:'100%'}}>
            <ScrollView style={{flex: 0.8}} horizontal = {false} showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator = {false}>
                {this.props.bathrooms.map((elem, i) => {return <BathroomPanel key = {i} bathroomName = {elem.bathroomName} bathroomAddress = {elem.bathroomAddress} />})}
            </ScrollView>
            <GoButton style ={{flex: 0.2, marginBottom: 0}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    item: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 30,
       margin: 2,
       borderColor: '#2a4944',
       borderWidth: 1,
       backgroundColor: '#d2f7f1'
    }
 })