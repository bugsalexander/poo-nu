import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import BathroomPanel from './src/components/BathroomPanel.js';
import BathroomScreen from './BathroomScreen.js';
import BathroomPage from './src/pages/BathroomPage';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {BathroomPage} title = "Home" initial = {true} />
         <Scene key = "info" component = {BathroomScreen} title = "Bathroom Info" />
      </Scene>
   </Router> 
)
export default Routes