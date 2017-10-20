import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Icon, Spinner, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';
import firebase, {firebaseAuth} from '../firebase/Firebase';

export default class Registro extends Component < {} > {
  state = {
    correo: '',
    password: '',
    verifyPassword: '',
    error: '',
    loading: false
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  onButtonPress() {
    const {correo, password, verifyPassword} = this.state;
    this.setState({error: '', loading: true});
    if (password == verifyPassword && password != null && verifyPassword != null) {
      firebaseAuth.createUserWithEmailAndPassword(correo, password)
      .then(this.onLoginSuccess).catch(this.onLoginFailed);
    } else {
      Toast.show({
        text: 'Llene los campos correctamente', position: 'bottom', buttonText: 'OK', type: 'danger'})
    }
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({
      text: 'Registro fallido, verifique campos', position: 'bottom', buttonText: 'OK', type: 'danger'})
  }

  onLoginSuccess() {
    this.setState({correo: '', password: '', error: '', verifyPassword: '', loading: false});
    Actions.Log();
    Toast.show({text: 'Bienvenido', position: 'bottom', duration: 3000, type: 'success'})
  }

  spinnerInicio() {
    if (this.state.loading) {
      return (
        <Button rounded block style={styles.buttonSpinner}>
          <Spinner color='white'/>
        </Button>
      );
    }

    return (
      <View style={styles.content}>
        <Button block style={styles.button} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.boton}>REGISTRARTE</Text>
        </Button>
      </View>
    );
  }

  buttonContra() {
    const {verifyPassword, password} = this.state;
    if (verifyPassword == password) {
      return (
        <Item success style={styles.inputRounded}>
          <Input
            name="vcontraseña"
            placeholder='Verificar Contraseña'
            placeholderTextColor='#000'
            returnKeyType='next'
            secureTextEntry={true}
            autoCapitalize='none'
            secureTextEntry={true}
            value={this.state.verifyPassword}
            onChangeText={(verifyPassword) => this.setState({verifyPassword})}/>
          <Icon name='checkmark-circle' style={styles.icon}/>
        </Item>
      );
    }

    return (
      <Item error style={styles.inputRounded}>
        <Input
          name="vcontraseña"
          placeholder='Verificar Contraseña'
          placeholderTextColor='#000'
          returnKeyType='next'
          secureTextEntry={true}
          autoCapitalize='none'
          secureTextEntry={true}
          value={this.state.verifyPassword}
          onChangeText={(verifyPassword) => this.setState({verifyPassword})}/>
        <Icon name='close-circle' style={styles.icon}/>
      </Item>
    );
  }

  render() {
    return (
      <ImageBackground source={img} style={styles.img}>

        <View style={styles.view1}>
          <View style={styles.view2}>
            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="nombre"
                  placeholder='Nombre'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="correo"
                  placeholder='Correo Electronico'
                  keyboardType='email-address'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="contraseña"
                  placeholder='Contraseña'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}/>
              </Item>
            </View>

            <View>
              {this.buttonContra()}
            </View>

            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="telefono"
                  placeholder='Telefono Celular'
                  keyboardType='numeric'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'/>
              </Item>
            </View>
          </View>
        </View>

        {this.spinnerInicio()}

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
    flexDirection: 'row'
  },
  view1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  view2: {
    alignItems: 'center'
  },
  inputRounded: {
    width: '86%',
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
  },
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  }
});
