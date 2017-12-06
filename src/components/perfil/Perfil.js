import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Platform} from 'react-native';
import {Container, Content, SwipeRow, Icon, Button, Thumbnail, H1} from 'native-base';
import img2 from '../../assets/imgs/usuario.jpg';
import Cabecera from '../comun/Cabecera';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';
import HistorialPedidos from './HistorialPedidos';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Perfil extends Component {
  render() {
    return (
      <Container style={styles.container}>
        {header}
        <Content>
          <ImageBackground source={img} style={styles.img}>
            <View style={styles.view}>
              <View style={styles.view}>
                <Thumbnail source={img2} style={styles.thub}/>
              </View>
              <H1 style={styles.h1}>Saul Sandoval M</H1>
              <Text style={styles.text}>sauldevelop@gmail.com</Text>
            </View>
          </ImageBackground>

          <View>
            <Text style={styles.orden}>Historia de Ordenes</Text>
          </View>

          <HistorialPedidos/>
          <HistorialPedidos/>
          <HistorialPedidos/>
          <HistorialPedidos/>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thub: {
    margin: 10,
    height: 80,
    width: 80
  },
  h1: {
    marginLeft: 20,
    color: 'white'
  },
  text: {
    marginLeft: 20,
    color: 'white'
  },
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  },
  view: {
    alignSelf: 'center'
  },
  orden: {
    alignSelf: 'center',
    margin: 20,
    fontSize: 20,
    color: 'black'
  },
  container: {
    backgroundColor: 'white'
  }
});
