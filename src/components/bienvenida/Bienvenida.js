import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {Button, Icon} from 'native-base';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
// import bienve3 from '../../assets/imgs/img5.jpg';
// import bienve2 from '../../assets/imgs/img4.jpg';

export default class Bienvenida extends Component < {} > {
  render() {
    return (
      <View style={styles.view}>
        <StatusBar hidden={true}/>
        <Swiper
          loop={false}
          showsPagination={false}
          showsButtons={true}
          nextButton={
            <Text style = {styles.texto}> › </Text>
          }
          prevButton={
            <Text style={styles.texto}> ‹ </Text>
          }>

          <ImageBackground source={img} style={styles.img}>
            <View style={styles.viewImage}>
              <Icon name="md-cart" style={styles.icon}/>
              <Text style={styles.text}>EAT FAST</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={img} style={styles.img}>
            <View style={styles.viewImage}>
              <Text style={styles.text}>¿IR AL SUPER?</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={img} style={styles.img2}>
            <View style={styles.viewImage2}>

              <View style={styles.view2}>
                <Text style={styles.text}>NOSOTROS VAMOS</Text>
              </View>

              <View style={styles.view3}>
                <Button rounded success onPress={() => Actions.Login()} style={styles.button}>
                  <Text style={styles.texto2}>
                    INICIAR SESIÓN
                  </Text>
                </Button>

                <Text style={styles.texto3} onPress={() => Actions.Principal()}>
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
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  img2: {
    height: '100%',
    width: '100%'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  view: {
    flex: 1
  },
  texto: {
    fontSize: 100,
    color:'orange'
  },
  viewImage: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    color: 'white',
    fontSize: 140,
    alignSelf: 'center'
  },
  viewImagw2: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between'
  },
  view2: {
    marginTop: '77%'
  },
  view3: {
    alignSelf: 'center',
    marginBottom: '20%',
    width: '100%'
  },
  button: {
    width: '78%',
    alignSelf: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto2: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  texto3: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 15
  }
});
