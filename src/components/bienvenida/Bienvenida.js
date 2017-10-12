import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
// import Video from 'react-native-video';
// import video from './src/assets/video/video.mp4';
import {Button} from 'native-base';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';
import {Buttonn} from "../comun";

const Texto = Platform.select({
  ios: 'DE LA CENTRAL\n A TU HOGAR,\n EN MINUTOS',
  android: 'DE LA CENTRAL\n A TU HOGAR,\n EN MINUTOS',
  //pensar en la frase de inicio
});

export default class Bienvenida extends Component < {} > {
  render() {
    return (
      <ImageBackground source={img} style={styles.img}>
        <StatusBar barStyle="dark-content"/>
        <View>
          <Text style={styles.nombre}>AppBasto</Text>



          <Text style={styles.texto}>{Texto}</Text>

        <View style={styles.content}>
          <Button rounded block style={styles.buttonIngreso} onPress={() => Actions.Login()}>
            <Text style={styles.boton}>COMENZAR</Text>
          </Button>
        </View>
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
    justifyContent: 'space-around',
      alignItems:'center',
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
    color: 'white',
      marginTop:10
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
