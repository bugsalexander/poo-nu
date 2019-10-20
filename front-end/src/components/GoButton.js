import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class GoButton extends Component {

  state = {
    bathroom: null
  }

  getNearestBathroom = () => {
    const query = ` 
                query {
                    getNearestBathrooms(lat: 42, long: -71, count: 1) {
                    bathroom_id
                    building_id
                    name
                    building_name
                    description
                    floor
                    male
                    female
                    all_gender
                    handicap_accessible
                    }
                  }`;
        request("http://35.199.57.159", query)
                  .then((result) => {
                    return result.getNearestBathrooms;
                  })
                  .catch(console.error); 
      }

  goToNearestBathroom() {
    const bathroom = this.getNearestBathroom();
    this.setState({
      bathroom
    });

    // TODO: redo this thing with the proper information from the query
    Actions.info({bathroom: this.state.bathroom});
  }
 
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Button
              title="I gotta go."
              onPress={() => this.goToNearestBathroom()}
            />
            
          </View>
        </SafeAreaView> 
      );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
