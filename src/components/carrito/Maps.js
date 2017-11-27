import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

// const {width, height} = Dimensions.get('window');

export default class Maps extends Component <{}> {
  // constructor(){
  // 	super();
  // 	this.state = {
  //     region: {
  //       latitude: null,
  //       longitude: null,
  //       latitudeDelta: null,
  //       longitudeDelta: null,
  //     }
  //   };
  // }
  //
  // calcDelta(lat, lon, accuracy){
  //   const oneDegreeOfLongitudInMeters = 111.32;
  //   const circumference = (40075 / 360)
  //   const latDelta = accuracy * (1 / (Math.cos(lat) * circumference))
  //   const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)
  //
  //   this.setState({
  //     region: {
  //       latitude: lat,
  //       logitude: lon,
  //       latitudeDelta: latDelta,
  //       longitudeDelta: lonDelta
  //     }
  //   })
  // }
  //
  // componentWillMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const lat = position.coords.latitude
  //       const lon = position.coords.longitude
  //       const accuracy = position.coords.accuracy
  //       this.calcDelta(lat, lon, accuracy)
  //     }
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
          <MapView
            style={styles.container}
            
            initialRegion={{
              latitude: 20.1286601,
              longitude: -98.7976939,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}>
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
