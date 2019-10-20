import React, {Component} from 'react';
import MapView, { MapContainer, PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import {View} from 'react-native';


class RenderMe extends Component{

    fixUndefined(val) {
        if(!val || val == NaN || val == undefined) {
            return 0;
        } else {
            return val;
        }
    }

    render() {
        const latlng = {
            latitude: this.fixUndefined(this.props.x), 
            longitude: this.fixUndefined(this.props.y)
        }
        return <Circle center = {latlng} radius = {this.props.rad} />;
    }
}

export default class InnerMap extends Component {
    
    fixUndefined(val) {
        if(!val || val == NaN || val == undefined || val == null) {
            return 0;
        } else {
            return val;
        }
    }

    // draws the disaster radius you are contained in
    renderZone(x, y, rad) {
        return <Circle zIndex = {999} strokeColor = {rgba(255, 0, 0, 1)} coordinate = {{latitude: this.fixUndefined(x), longitude: this.fixUndefined(y)}} radius = {rad} />
    }

 
    render() {  
        return ( <View>
        <MapView provider={ PROVIDER_GOOGLE } style={ { flex: 0, paddingBottom: 600 } }
            initialRegion = {{latitude: this.fixUndefined(38.4285), longitude: this.fixUndefined(20.6765), latitudeDelta: 1, longitudeDelta: 1}} >
            </MapView> 
            </View>
        );
    }
}

/*
// <RenderZone x = {this.props.curLat} y = {this.props.curLong} rad = {10}/>
            <RenderZone x = {this.props.pickupLat} y = {this.props.pickupLong} rad = {10} color = {`#000fff`}/>
            */
