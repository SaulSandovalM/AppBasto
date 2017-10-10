import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
// import Video from 'react-native-video';
// import video from './src/assets/video/video.mp4';
import {Button} from 'native-base';
import img from '../../assets/imgs/fondo.jpg';

const Texto = Platform.select({
  ios: 'DE LA CENTRAL\n A TU HOGAR,\n EN MINUTOS',
  android: 'DE LA CENTRAL\n A TU HOGAR,\n EN MINUTOS',
});

export default class Bienvenida extends Component < {} > {
  render() {
    return (
      <ImageBackground source={img} style={styles.img}>

        <View>
          <Text style={styles.nombre}>AppBasto</Text>
        </View>

    {/*<Video source={video} rate={1.0} muted={true} resizeMode={"cover"} repeat style={styles.video}/>*/}

        <View style={styles.content2}>
          <Text style={styles.texto}>{Texto}</Text>
        </View>

        <View style={styles.content}>
          <Button rounded block style={styles.buttonIngreso}>
            <Text style={styles.boton}>INICIAR SESIÓN</Text>
          </Button>
          <Text style={styles.text}>REGÍSTRATE</Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // video: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 15
  },
  content2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  img: {
    justifyContent: 'flex-end',
    flex: 2,
    height: null,
    width: null,
    opacity: 15
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  text: {
    color: 'white'
  },
  texto: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 45
  },
  nombre: {
    color: 'white',
    backgroundColor: 'transparent',
    margin: 25,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
});
