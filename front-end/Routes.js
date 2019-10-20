import React from "react";
import { Router, Scene } from "react-native-router-flux";
import BathroomScreen from "./BathroomScreen.js";
import BathroomPage from "./src/pages/BathroomPage";
import AddBathroom from "./src/components/AddBathroom";
import { StyleSheet, Text, View } from "react-native";

const Routes = () => (
  <Router
    sceneStyle={styles.container}
    navigationBarStyle={{ width: "100%" }}
    titleStyle={{ width: "100%" }}
  >
    <Scene key="root">
      <Scene key="home" component={BathroomPage} title="Home" initial={true} rightTitle="poop"/>
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
