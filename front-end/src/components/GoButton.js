import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

export default class GoButton extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Button
              title="GO!"
              onPress={() => Alert.alert('pranked')}
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
    marginHorizontal: 16,
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
