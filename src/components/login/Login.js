import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, Input, Item, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';
import Video from 'react-native-video';
import videop from '../../assets/video/videop.mp4';

export default class Login extends Component < {} > {
  render() {
    return (
      <View style={styles.img}>

        <Video
        source={videop}
        rate={1.0}
        muted={true}
        resizeMode={"cover"}
        repeat
        style={styles.video}/>

      <View style={styles.view4}>
          <Icon name="ios-arrow-back" style={styles.icon} onPress={() => Actions.pop()}/>
        </View>

        <View>
          <Item style={styles.inputRounded}>
            <Input
              name="correo"
              placeholder='Correo electrónico'
              keyboardType='email-address'
              placeholderTextColor='#fff'
              returnKeyType='next'
              autoCapitalize='none'/>
          </Item>

          <Item style={styles.inputRounded}>
            <Input
              name="password"
              placeholder='Contraseña'
              placeholderTextColor='#fff'
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
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
  view4: {
    flex: 1,
    margin: 20
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: 'orange',
    borderWidth: 1.5,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    color: 'white'
  },
  text1: {
    color: 'white',
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
    backgroundColor: 'orange'
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'orange',
    fontSize: 50
  }
});
