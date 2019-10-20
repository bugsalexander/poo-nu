import React, {Component} from 'react';

import {SafeAreaView, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';

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
    {bathroomName:'West Village H: Floor 1', bathroomAddress: '291 St. Botolph St.'}]

export default class BathroomPage extends Component {
    render() {
        return (
            <View style={{ marginTop: 40, width: '100%', height:'100%'}}>
            <ScrollView style={{flex: 0.8}} horizontal = {false} showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator = {false}>
                {list.map((elem, i) => {return <BathroomPanel key = {i} bathroomName = {elem.bathroomName} bathroomAddress = {elem.bathroomAddress} />})}
            </ScrollView>
            <GoButton style ={styles.button}/>
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