import React, {Component} from 'react';

import {SafeAreaView, ActivityIndicator, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';
import axios from 'axios';
const list = [ 
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'},
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'}];


export default class BathroomPage extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown', 
        query: null   
    }

    watchID = null;
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        });

        const query = this.getNearestBathrooms(20);
        this.setState({
          query
        });

    }
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }
    
    getNearestBathrooms = (numBathrooms) => {
        axios({
            url:'localhost://3000 or something',
            method: 'get',
            data: {
                query: "query {"
                    + "getNearestBathrooms(lat: ${this.state.lat}, long: ${this.state.long}, count:${numBathrooms}) {"
                    +  "bathroom_id"
                    +  "building_id"
                    +  "name"
                    +  "building_name"
                    +  "description"
                    +  "floor"
                    +  "male"
                    +  "female"
                    +  "all_gender"
                    +  "handicap_accessible"
                  }
        }).then((result) => {
            console.log(result.data);
            return result.data;
        });
      }

    render() {
        return (
            <View style={{ marginTop: 40, width: '100%', height:'100%'}}>
            <ScrollView style={{flex: 0.8}} horizontal = {false} showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator = {false}>
                {list.map((elem, i) => {return <BathroomPanel lastPos = {this.state.lastPosition} navigation = {this.props.navigation} key = {i} bathroomName = {elem.bathroomName} bathroomAddress = {elem.bathroomAddress} />})}
            </ScrollView>
            <GoButton lastPos = {this.state.lastPos} style ={styles.button}/>
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
    },
    button: {
        flex: 0.2, 
        marginBottom: 0
    }
 })