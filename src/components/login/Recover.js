import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {Button, Input, Item, Header} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';

export default class Recover extends Component < {} > {
  render() {
    return (
      <Container>
        <Header/>



      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    justifyContent: 'flex-end',
    flex: 2,
    height: null,
    width: null
  },
  texto: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  view: {
    margin: 15
  },
  view2: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  view3: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    backgroundColor: 'transparent'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    color: 'black'
  },
  text1: {
    color: 'black',
    fontSize: 18
  },
  adelante: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20
  },
  button: {
    width: '78%',
    alignSelf: 'center',
    backgroundColor: '#4DA49B'
  }
});
