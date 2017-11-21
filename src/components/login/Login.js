import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, Input, Item, Icon, Spinner, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Video from 'react-native-video';
import videop from '../../assets/video/videop.mp4';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../../actions';

class Login extends Component <{}> {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" color='white'/>
    }

    return (
      <Button rounded style={styles.button} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.boton}>INICIAR SESIÓN</Text>
      </Button>
    );
  }

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
          <Icon
            name="ios-arrow-back"
            style={styles.icon}
            onPress={() => Actions.pop()}/>
        </View>

        <View>
          <Item style={styles.inputRounded}>
            <Input
              name="correo"
              placeholder='Correo electrónico'
              keyboardType='email-address'
              placeholderTextColor='#fff'
              returnKeyType='next'
              autoCapitalize='none'
              style={styles.color}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}/>
          </Item>

          <Item style={styles.inputRounded}>
            <Input
              name="password"
              placeholder='Contraseña'
              placeholderTextColor='#fff'
              secureTextEntry={true}
              style={styles.color}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}/>
          </Item>

          {this.renderButton()}

          <Text style={styles.errorText}>
            {this.props.error}
          </Text>

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
    fontWeight: 'bold',
    alignSelf: 'center'
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
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange'
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'orange',
    fontSize: 50
  },
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: 'orange'
  },
  color: {
    color: 'white'
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth
  return {email, password, error, loading};
};

export default connect(mapStateToProps, {loginUser, emailChanged, passwordChanged})(Login);
