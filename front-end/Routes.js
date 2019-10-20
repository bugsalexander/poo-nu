import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import BathroomScreen from './BathroomScreen.js';
import BathroomPage from './src/pages/BathroomPage';
import { StyleSheet, Text, View } from 'react-native';

const Routes = () => (
   <Router sceneStyle={styles.container}>
      <Scene key = "root" >
         <Scene key = "home" component = {BathroomPage} title = "Home" initial = {true} />
         <Scene key = "info" component = {BathroomScreen} title = "Bathroom Info" />
      </Scene>    
   </Router>   
)

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%'
    },
}); 

export default Routes