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
import BathroomScreen from "./src/pages/BathroomScreen";
import RatingModal from "./src/components/RatingModal.js";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { AppRegistry} from 'react-native';
import Routes from './Routes';
import InnerMap from './src/components/InnerMap';
import AddBathroom from './src/pages/AddBathroom';

function App() {
  return (
  <Routes /> 
  //  <InnerMap/>
  );
} 


export default App
AppRegistry.registerComponent('App', () => App)