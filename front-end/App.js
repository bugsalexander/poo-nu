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



export default function App() {
  return (
    <View style={styles.container}>
      {/* <BathroomPage bathrooms = {list}/> */}
      <BathroomScreen/>
    </View>
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
