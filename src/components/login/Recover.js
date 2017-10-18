import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';

export default class Registro extends Component < {} > {
  render() {
    return (
      <ImageBackground source={img} style={styles.img}>

        <View style={styles.view}>
          <Item style={styles.inputRounded}>
            <Input
              name="correo"
              placeholder='Correo electrónico'
              keyboardType='email-address'
              placeholderTextColor='#000'
              returnKeyType='next'
              autoCapitalize='none'/>
          </Item>

          <Item style={styles.inputRounded}>
            <Input
              name="password"
              placeholder='Contraseña'
              placeholderTextColor='#000'
              secureTextEntry={true}/>
          </Item>
        </View>

        <View style={styles.content}>
          <Button block style={styles.button} onPress={() => Actions.Login()}>
            <Text style={styles.boton}>RECUPERAR CONTRASEÑA</Text>
          </Button>
        </View>

      </ImageBackground>
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
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
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
  button: {
    width: '78%',
    alignSelf: 'center',
    backgroundColor: '#4DA49B'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 15
  }
});
