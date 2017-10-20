import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/login.jpeg';

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

  atras() {
    Actions.pop()
  }

  onButtonPress() {
    const {correo, password, verifyPassword} = this.state;
    this.setState({error: '', loading: true});
    if (password == verifyPassword && password != null && verifyPassword != null) {
      firebaseAuth.createUserWithEmailAndPassword(correo, password).then(this.onLoginSuccess).catch(this.onLoginFailed);
    } else {
      Toast.show({text: 'Llene los campos correctamente', position: 'bottom', buttonText: 'OK', type: 'danger'})
    }
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({text: 'Registro fallido, verifique campos', position: 'bottom', buttonText: 'OK', type: 'danger'})
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
      <Button rounded block style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.text}>CREAR CUENTA</Text>
      </Button>
    );
  }

  buttonContra() {
    const {verifyPassword, password} = this.state;
    if (verifyPassword == password) {
      return (
        <Item rounded success style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Verificar Contraseña' secureTextEntry={true}
            placeholderTextColor='#ccc' value={this.state.verifyPassword}
            onChangeText={(verifyPassword) => this.setState({verifyPassword})}/>
          <Icon name='checkmark-circle' style={styles.icon}/>
        </Item>
      );
    }

    return (
      <Item rounded error style={styles.inputRounded}>
        <Input style={styles.input} placeholder='Verificar Contraseña' secureTextEntry={true}
          placeholderTextColor='#ccc' value={this.state.verifyPassword}
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
            <View style={styles.view}>
              <Item style={styles.inputRounded}>
                <Input
                  name="nombre"
                  placeholder='Nombre'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'/>
              </Item>

              <Item style={styles.inputRounded1}>
                <Input
                  name="apellido"
                  placeholder='Apellido'
                  placeholderTextColor='#000'
                  returnKeyType='next'/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded2}>
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
              <Item style={styles.inputRounded2}>
                <Input
                  name="contraseña"
                  placeholder='Contraseña'
                  placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'
                  secureTextEntry={true}/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded2}>
                <Input
                  name="vcontraseña"
                  placeholder='Verificar
                  Contraseña' placeholderTextColor='#000'
                  returnKeyType='next'
                  autoCapitalize='none'
                  secureTextEntry={true}/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded2}>
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

        <View style={styles.content}>
          <Button block style={styles.button} onPress={() => Actions.Principal()}>
            <Text style={styles.boton}>REGISTRARTE</Text>
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
    width: '40%',
    borderColor: '#000',
    borderWidth: 1.5,
    backgroundColor: 'transparent'
  },
  inputRounded1: {
    marginLeft: 20,
    width: '40%',
    borderColor: '#000',
    borderWidth: 1.5,
    backgroundColor: 'transparent'
  },
  inputRounded2: {
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
  }
});
