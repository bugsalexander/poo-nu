import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import BathroomScreen from "./src/pages/BathroomScreen.js";
import BathroomPage from "./src/pages/BathroomPage";
import AddBathroom from "./src/pages/AddBathroom";
import { StyleSheet, Text, View } from "react-native";

const Routes = () => (
  <Router
    sceneStyle={styles.container}
    navigationBarStyle={{ width: "100%" }}
    titleStyle={{ width: "100%" }}
  >
    <Scene key="root">
      <Scene key="home" component={BathroomPage} title="Home" onRight={() => {Actions.add()}} rightTitle="add" initial={true}/>
      <Scene key="info" component={BathroomScreen} title="Bathroom Info" />
      <Scene key="add" component={AddBathroom} title="New Bathroom" />
    </Scene>
  </Router> 
);

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center"
  }
});

//         justifyContent: 'center',
// align items center
export default Routes;
