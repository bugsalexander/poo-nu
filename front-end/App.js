import React from 'react';
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
import AddBathroom from './src/components/AddBathroom';

function App() {
  return (
    <AddBathroom />
  );
} 


export default App
AppRegistry.registerComponent('App', () => App)