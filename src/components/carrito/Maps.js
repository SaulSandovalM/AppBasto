import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Platform} from 'react-native';
import MapView from 'react-native-maps';
import {Container, Button, Toast, Footer, FooterTab, Right, StyleProvider} from 'native-base';
import Cabecera from '../comun/Cabecera';
import {Actions} from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RADIO = width / height;
const LATITUDE_DELTA = 0.0150;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO;
const SPACE = 0.01;
const LATITUDE = 20.104989;
const LONGITUDE = -98.756323;

const header = Platform.select({
  ios: <Cabecera/>,
});

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

export default class Maps extends Component <{}> {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 20.104989,
        longitude: -98.756323,
        longitudeDelta: 0.0043,
        latitudeDelta: 0.0034
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  };

  watchID: ? number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };

      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion});
    }, (error) => console.log(error), {
      enableHighAccuracy: true,
      timeout: 200000,
      maximumAge: 10000
    });

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    console.log(this.props);
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          {header}
        <View style={styles.container}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.container}
            region={this.state.initialPosition}>

              <MapView.Marker
                coordinate={this.state.markerPosition}
                nSelect={(e) => log('onSelect', e)}
                onDrag={(e) => log('onDrag', e)}
                onDragStart={(e) => log('onDragStart', e)}
                onDragEnd={(e) => log('onDragEnd', e)}
                onPress={(e) => log('onPress', e)}
                draggable>

                <View style={styles.radius}>
                  <View style={styles.marker}/>
                </View>

              </MapView.Marker>

            </MapView>
        </View>
        <Footer style={styles.back}>
            <FooterTab style={styles.footerT}>
              <Right>
              <Button style={styles.back2} onPress={()=>Actions.ResumenPedido()}>
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
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,112,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    backgroundColor: '#337ab7',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2
  },
  container: {
    flex: 1
  },
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
