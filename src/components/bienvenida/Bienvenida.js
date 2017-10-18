import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {Button, Icon} from 'native-base';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import bienve3 from '../../assets/imgs/img5.jpg';
import bienve2 from '../../assets/imgs/img4.jpg';


export default class Bienvenida extends Component < {} > {
  render() {
    return (
        <View style={{flex:1}}>
          <StatusBar hidden={true} />
        <Swiper loop={false} showsPagination={false} showsButtons={true}
                nextButton={<Text style={{fontSize: 100, color:'orange'}}>›</Text>}
                prevButton={<Text style={{fontSize: 100, color:'orange'}}>‹</Text>}
        >

          <ImageBackground source={img} style={styles.img}>
            <View style={{backgroundColor:'rgba(0,0,0,.5)', height:'100%', width:'100%', justifyContent:'center' }}>
                <Icon name="md-cart" style={{color:'white', fontSize: 140, alignSelf:'center'}} />
                <Text style={styles.text}>EAT FAST</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bienve2} style={styles.img}>
            <View style={{backgroundColor:'rgba(0,0,0,.5)', height:'100%', width:'100%', justifyContent:'center' }}>
              <Text style={styles.text}>¿IR AL SUPER?</Text>
            </View>
          </ImageBackground>

          <ImageBackground source={bienve3} style={styles.img2}>
            <View style={{backgroundColor:'rgba(0,0,0,.5)', height:'100%', width:'100%', justifyContent:'space-between' }}>

              <View style={{ marginTop:'77%'}}>
                <Text style={styles.text}>NOSOTROS VAMOS</Text>
              </View>

              <View style={{alignSelf:'center', marginBottom:'20%', width:'100%'}}>
                <Button rounded success
                        onPress={()=>Actions.Login()}
                        style={{width: '78%', alignSelf: 'center', backgroundColor: 'orange', alignItems:'center', justifyContent:'center'}}>
                  <Text
                      style={{color: 'white', fontSize: 16, alignSelf:'center'}}
                  >
                    INICIAR SESIÓN
                  </Text>
                </Button>

                <Text
                    style={{color: 'white', fontSize: 16, alignSelf:'center', marginTop:15}}
                    onPress={()=>Actions.Principal()}
                >
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
    width: '100%',
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
        alignSelf:'center'
    }

});
