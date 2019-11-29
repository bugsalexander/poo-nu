import React, { Component } from "react";
import MapView, {
  MapContainer,
  PROVIDER_GOOGLE,
  Marker,
  Circle
} from "react-native-maps";
import { View, Text } from "react-native";

class RenderMe extends Component {
  fixUndefined(val) {
    if (!val || val == NaN || val == undefined) {
      return 0;
    } else {
      return val;
    }
  }

  render() {
    const latlng = {
      latitude: this.fixUndefined(this.props.x),
      longitude: this.fixUndefined(this.props.y)
    };
    return <Circle center={latlng} radius={this.props.rad} />;
  }
}

export default class InnerMap extends Component {
  state = {
    initialPosition: "unknown",
    lastPosition: "unknown",
    query: null,
    lastPos: this.props.lastPos
  };

  watchID = null;
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      const lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
    });
  };
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };

  fixUndefined(val) {
    if (!val || val == NaN || val == undefined || val == null) {
      return 0;
    } else {
      return val;
    }
  }

  // draws the disaster radius you are contained in
  renderZone(x, y, rad) {
    return (
      <Circle
        zIndex={999}
        strokeColor={rgba(255, 0, 0, 1)}
        coordinate={{
          latitude: this.fixUndefined(x),
          longitude: this.fixUndefined(y)
        }}
        radius={rad}
      />
    );
  }

  render() {
    const latlng = {
        latitude: this.fixUndefined(this.props.latitude),
        longitude: this.fixUndefined(this.props.longitude)
      };

    return (
      <View style={{}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ paddingBottom: 200 }}
          initialRegion={{
            latitude: this.fixUndefined(this.props.latitude),
            longitude: this.fixUndefined(this.props.longitude),
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
          <Marker coordinate={latlng}></Marker>
        </MapView>
        {console.log(this.lastPos)}
      </View>
    );
  }
}

/*
// <RenderZone x = {this.props.curLat} y = {this.props.curLong} rad = {10}/>
            <RenderZone x = {this.props.pickupLat} y = {this.props.pickupLong} rad = {10} color = {`#000fff`}/>
            */
