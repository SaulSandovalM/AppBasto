import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Icon, Spinner, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/registro.jpeg';
import {connect} from 'react-redux';
import {emailChangedreg, passwordChangedreg, loginUserreg} from '../../actions/registerActions';

class Registro extends Component < {} > {
    onEmailChange(text) {
        this.props.emailChangedreg(text);
    }

    onPasswordChange(text) {
        this.props.passwordChangedreg(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUserreg({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" color='white'/>
        }

        return (
            <View style={styles.content}>
            <Button block style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.boton}>INICIAR SESIÓN</Text>
            </Button>
            </View>
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
                  style={styles.color}
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
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
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={this.props.password}
                />
              </Item>
            </View>

            <View />



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

            {this.renderButton()}
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({regis}) => {
    const {email, password, error, loading} = regis
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {emailChangedreg, passwordChangedreg, loginUserreg})(Registro);


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
