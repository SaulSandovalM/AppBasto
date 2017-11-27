import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Icon, Spinner, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/registro.jpeg';
import firebase, {firebaseAuth} from '../firebase/Firebase';
import {setUser} from '../../actions/userActions';
import {store} from '../../App';

const initial = {
  nombre: '',
  correo: '',
  password: '',
  verifyPassword: '',
  telefono: '',
  error: '',
  loading: false
}

export default class Registro extends Component < {} > {
  state = {
    nombre: '',
    correo: '',
    password: '',
    verifyPassword: '',
    telefono: '',
    error: '',
    loading: false
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(){
    const {correo, password, verifyPassword} = this.state;
    //console.log(this.state);
    this.setState({error: '', loading: true});
    if (password == verifyPassword && password != null && verifyPassword != null) {
      firebaseAuth.createUserWithEmailAndPassword(correo, password)
      .then(this.onLoginSuccess).catch(this.onLoginFailed);
    } else {
      Toast.show({text: 'Llene los campos correctamente', position: 'bottom', buttonText: 'OK', type: 'danger'});
      this.setState({loading:false});
    }
  }

  onLoginFailed(e) {
    //console.log(e)
    let error = "";
    if(e.code === "auth/weak-password") error = "Tu contraseña debe tener al menos 6 caracteres"

    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({text: 'Registro fallido, '+error, position: 'bottom', buttonText: 'OK', type: 'danger'})
  }

  onLoginSuccess(s) {
    console.log(s);
    s.phoneNumber = this.state.telefono;
    s.displayName = this.state.nombre;
    store.dipatch(setUser(s));
    this.setState(initial);
    Actions.Principal();
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
            placeholderTextColor='#fff'
            returnKeyType='next'
            secureTextEntry={true}
            autoCapitalize='none'
            secureTextEntry={true}
            style={styles.color}
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
          placeholderTextColor='#fff'
          returnKeyType='next'
          secureTextEntry={true}
          autoCapitalize='none'
          secureTextEntry={true}
          style={styles.color}
          value={this.state.verifyPassword}
          onChangeText={(verifyPassword) => this.setState({verifyPassword})}/>
        <Icon name='close-circle' style={styles.icon}/>
      </Item>
    );
  }

  render() {
    return (
      <ImageBackground source={img} style={styles.img}>

        <View style={styles.estiloImageB}>
          <View style={styles.view4}>
            <Icon name="ios-arrow-back" style={styles.icon2} onPress={() => Actions.pop()}/>
          </View>
          <View>
            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="nombre"
                  placeholder='Nombre'
                  placeholderTextColor='#fff'
                  returnKeyType='next'
                  autoCapitalize='none'
                  style={styles.color}/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="correo"
                  placeholder='Correo Electronico'
                  keyboardType='email-address'
                  placeholderTextColor='#fff'
                  returnKeyType='next'
                  autoCapitalize='none'
                  onChangeText={correo=>this.setState({correo})}
                  style={styles.color}/>
              </Item>
            </View>

            <View>
              <Item style={styles.inputRounded}>
                <Input
                  name="contraseña"
                  placeholder='Contraseña'
                  placeholderTextColor='#fff'
                  returnKeyType='next'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  style={styles.color}
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
                  style={styles.color}
                  name="telefono"
                  placeholder='Telefono Celular'
                  keyboardType='numeric'
                  placeholderTextColor='#fff'
                  returnKeyType='next'
                  autoCapitalize='none'/>
              </Item>
            </View>
          </View>

          {this.spinnerInicio()}
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
    backgroundColor: 'orange'
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
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: 'orange',
    borderWidth: 1.5
  },
  color: {
    color: 'white'
  },
  estiloImageB: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    color: 'orange'
  },
  view4: {
    flex: 1,
    margin: 20
  },
  icon2: {
    backgroundColor: 'transparent',
    color: 'orange',
    fontSize: 50
  }
});
