import React, {Component} from 'react';

import {SafeAreaView, ActivityIndicator, Text, Button, View, StyleSheet, ScrollView, SectionList } from 'react-native';
import BathroomPanel from '../components/BathroomPanel';
import GoButton from '../components/GoButton';
import {request} from 'graphql-request';
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

import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  SectionList
} from "react-native";
import BathroomPanel from "../components/BathroomPanel";
import GoButton from "../components/GoButton";
import axios from "axios";
const list = [
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  },
  {
    bathroomName: "West Village H: Floor 1",
    bathroomAddress: "291 St. Botolph St.",
    genderText: "All-Gender",
    handicapText: "Handicap"
  }
];

export default class BathroomPage extends Component {
  state = {
    initialPosition: "unknown",
    lastPosition: "unknown",
    query: null
  };


  render() {
    return (
      <View style={{ marginTop: 40, width: "100%", height: "100%" }}>
        <ScrollView
          style={{ flex: 0.8 }}
          horizontal={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          {list.map((elem, i) => {
            return (
              <View>
                <BathroomPanel
                  lastPos={this.state.lastPosition}
                  navigation={this.props.navigation}
                  key={i}
                  bathroomName={elem.bathroomName}
                  bathroomAddress={elem.bathroomAddress}
                  genderText={elem.genderText}
                  handicapText={elem.handicapText}
                />
                <View style={styles.line} />
              </View>
            );
          })}
        </ScrollView>
        <GoButton lastPos={this.state.lastPos} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  },
  button: {
    flex: 0.2,
    marginBottom: 0
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1
  }
});
