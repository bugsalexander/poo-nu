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

export default function App() {
  return (
    <View style={styles.container}>
      <BathroomPage bathrooms = {list}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});