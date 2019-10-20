import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
<<<<<<< HEAD
import { Actions } from 'react-native-router-flux';
=======
import { Button } from 'react-native-elements';
>>>>>>> 8d9b5c627a9b87a9767d224b734fdcc9130e3475

export default class GoButton extends Component {

  getNearestBathroom = () => {
    return `
      query {
        getNearestBathrooms(lat: ${this.state.lat}, long: ${this.state.long}, count:1) {
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
      }
    `
  }

  goToNearestBathroom() {
    const query = this.getNearestBathrooms(20);
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
<<<<<<< HEAD
              title="GO!"
              onPress={() => this.goToNearestBathroom()}
=======
              title="I gotta go."
              onPress={() => Alert.alert('pranked')}
>>>>>>> 8d9b5c627a9b87a9767d224b734fdcc9130e3475
            />
            <Text style = {styles.boldText}>
               Initial position: {this.state.initialPosition} Current: {this.state.lastPosition}
            </Text>
            
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
