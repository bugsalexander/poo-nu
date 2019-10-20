import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import BathroomPanel from './src/components/BathroomPanel.js';
import BathroomScreen from './BathroomScreen.js';
import BathroomPage from './src/pages/BathroomPage';
import { StyleSheet, Text, View } from 'react-native';


const Routes = (props) => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" sceneStyle={styles.container} component = {BathroomPage} title = "Home" initial = {true} />
         <Scene key = "info" sceneStyle={styles.container} component = {BathroomScreen} title = "Bathroom Info" />
      </Scene>  
   </Router>   
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 

export default Routes