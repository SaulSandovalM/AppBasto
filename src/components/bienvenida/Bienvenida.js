import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar, Image} from 'react-native';
import {Button} from 'native-base';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import bienve3 from '../../assets/imgs/img5.jpg';
import bienve2 from '../../assets/imgs/img4.jpg';
import shoppy from '../../assets/imgs/shoppy.png';

export default class Bienvenida extends Component <{}> {
  render() {
    return (
      <View style={styles.viewP}>
        <StatusBar hidden={true}/>
        <Swiper
          loop={false}
          showsPagination={false}
          showsButtons={true}
          nextButton={
            <Text style = {styles.estiloF}> › </Text>
          }
          prevButton={
            <Text style = {styles.estiloF}> ‹ </Text>
          }>

          <ImageBackground source={img} style={styles.img}>
            <View style={styles.estiloImageB}>
              <Image source={shoppy} style={styles.icono}/>
            </View>
          </ImageBackground>

          <ImageBackground source={bienve2} style={styles.img}>
            <View style={styles.estiloImageB}>
              <Text style={styles.text}>¿IR AL SUPER?</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bienve3} style={styles.img2}>
            <View style={styles.estiloImagenF}>

              <View style={styles.estiloMargen}>
                <Text style={styles.text}>NOSOTROS{'\n'}VAMOS</Text>
              </View>

              <View style={styles.estiloV}>
                <Button rounded success onPress={() => Actions.Login()} style={styles.estiloButton}>
                  <Text style={styles.estiloTexto}>
                    INICIAR SESIÓN
                  </Text>
                </Button>

                <Text style={styles.estiloTexto2} onPress={() => Actions.Principal()}>
                  VER PRODUCTOS
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewP: {
    flex: 1
  },
  estiloF: {
    fontSize: 100,
    color: 'orange'
  },
  img: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  estiloImageB: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  img2: {
    height: '100%',
    width: '100%'
  },
  estiloImagenF: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between'
  },
  estiloMargen: {
    marginTop: '77%',
    alignSelf: 'center'
  },
  estiloV: {
    alignSelf: 'center',
    marginBottom: '20%',
    width: '100%'
  },
  estiloButton: {
    width: '78%',
    alignSelf: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  estiloTexto: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  estiloTexto2: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 15
  },
  icono: {
    marginTop: 50,
    width: 220,
    height: 93,
    alignSelf: 'center'
  }
});
