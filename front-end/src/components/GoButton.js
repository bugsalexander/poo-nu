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

export default class GoButton extends Component {

  getNearestBathroom = () => {
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

  goToNearestBathroom() {
    const query = this.getNearestBathroom();
    this.setState({
      query
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
