import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import {Button, Input, Item} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';

export default class Login extends Component < {} > {
  render() {
    return (
      <ImageBackground source={img} style={styles.img}>
        <StatusBar hidden={true} />

        <View>
          <View style={styles.adelante}>
            <Text style={styles.texto}
              onPress={() => Actions.Principal()}>INICIA SESIÓN MAS ADELANTE</Text>
          </View>
        </View>

        <View>
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

          <Button block style={styles.button} onPress={() => Actions.Principal()}>
            <Text style={styles.boton}>INICIAR SESIÓN</Text>
          </Button>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.view}>
              <TouchableOpacity onPress={() => Actions.Recover()}>
                <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view}>
              <TouchableOpacity onPress={() => Actions.Registro()}>
                <Text style={styles.text1}>Crear Cuenta</Text>
              </TouchableOpacity>
            </View>

          </View>
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
