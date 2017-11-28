import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Platform} from 'react-native';
import MapView from 'react-native-maps';
import {Container, Button, Toast, Footer, FooterTab, Right, StyleProvider} from 'native-base';
import Cabecera from '../comun/Cabecera';
import {Actions} from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

// const {width, height} = Dimensions.get('window');

const header = Platform.select({
  ios: <Cabecera/>,
});

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
  //
  // marker(){
  //   return {
  //     latitude: this.state.region.latitude,
  //     longitude: this.state.region.longitude
  //   }
  // }

  render() {
    return (
      // <View style={styles.container}>
      //   {this.state.region.latitude ?
      //     <MapView
      //       style={styles.maps}
      //       initialRegion={this.state.region}
      //     >
      //       <MapView.Marker
      //         coordinate={this.marker()}
      //         title="Hola"
      //         description="Casa"
      //         />
      //     </MapView>
      //   : null }
      // </View>
      <StyleProvider style={getTheme(material)}>
      <Container>
        {header}
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
      <Footer style={styles.back}>
          <FooterTab style={styles.footerT}>
            <Right>
            <Button style={styles.back2} onPress={()=>Actions.Pedido()}>
              <Text style={styles.textC}>Siguiente</Text>
            </Button>
          </Right>
          </FooterTab>
        </Footer>
    </Container>
  </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // maps: {
  //   flex: 1,
  //   width: width
  // }
  textC: {
    color: '#8e1c58',
    fontWeight: 'bold',
    fontSize: 18
  },
  back: {
    backgroundColor: 'white'
  },
  back2: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  footerT: {
    marginRight: 20
  }
});
