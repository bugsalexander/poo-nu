import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BathroomScreen from "./BathroomScreen.js";
import RatingModal from "./RatingModal.js";

export default function App() {
  return (
    <View style={styles.container}>
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
