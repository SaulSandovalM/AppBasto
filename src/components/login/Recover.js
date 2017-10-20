import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Toast, Spinner, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';
import firebase, {firebaseAuth} from '../firebase/Firebase';

export default class Registro extends Component < {} > {
  state = {
    correo: '',
    verifyCorreo: '',
    error: '',
    loading: false
  };

  constructor(props) {
    super(props);
    this.recover = this.recover.bind(this);
  }

  recover() {
    const {correo, verifyCorreo} = this.state;
    this.setState({error: '', loading: true});
    if (correo == verifyCorreo && correo != null && verifyCorreo != null) {
      firebaseAuth.sendPasswordResetEmail(correo).then(function() {
        Actions.Login()
        Toast.show({
          text: 'Revisa tu correo, continua los pasos', position: 'bottom', buttonText: 'OK', type: 'success'})
      }, function(error) {
        Toast.show({
          text: 'Correo inválido, verifique campos', position: 'bottom', buttonText: 'OK', type: 'danger'})
      });
    }
  }

  buttonCorreo() {
    const {verifyCorreo, correo} = this.state;
    if (verifyCorreo == correo) {
      return (
        <Item style={styles.inputRounded}>
          <Input
            name="correo"
            placeholder='Correo electrónico'
            keyboardType='email-address'
            placeholderTextColor='#000'
            returnKeyType='next'
            autoCapitalize='none'
            value={this.state.verifyCorreo}
            onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
        </Item>
      );
    }

    return (
      <Item style={styles.inputRounded}>
        <Input
          name="Verifica Correo"
          placeholder='Contraseña'
          placeholderTextColor='#000'
          secureTextEntry={true}
          value={this.state.verifyCorreo}
          onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
      </Item>
    );
  }

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
              autoCapitalize='none'
              value={this.state.verifyCorreo}
              onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
          </Item>

          <Item style={styles.inputRounded}>
            <Input
              name="Verifica Correo"
              placeholder='Contraseña'
              placeholderTextColor='#000'
              secureTextEntry={true}
              value={this.state.verifyCorreo}
              onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
          </Item>
        </View>

        {this.buttonCorreo()}

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
