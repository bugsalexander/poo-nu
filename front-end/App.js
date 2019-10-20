import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BathroomPage from './src/pages/BathroomPage';

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
import BathroomScreen from "./BathroomScreen.js";
import RatingModal from "./RatingModal.js";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { AppRegistry} from 'react-native';
import Routes from './Routes';

function App() {
  return (
    <Routes styles = {styles.container} />
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

export default App
AppRegistry.registerComponent('App', () => App)