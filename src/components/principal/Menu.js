import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img from '../../assets/imgs/usuario.jpg';
import img2 from '../../assets/imgs/nouser.png';
import {Container, List, ListItem, Left, Body, Right, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {firebaseAuth} from '../firebase/Firebase';

const {width, height} = Dimensions.get('window');

export default class Menu extends Component < {} > {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  salir() {
    firebaseAuth.signOut();
  }

  render() {
    return (
      <View style={styles.menu}>
        <ScrollView style={styles.content}>

          <ListItem icon >
            <Left>
              <Icon name="ios-basket" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Despensa</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-ice-cream" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Lácteos</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-nutrition" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Frutas y Verduras</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-restaurant" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Carnes y Pescados</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => Actions.Detalle()}>
            <Left>
              <Icon name="ios-cafe" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Panadería</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-beaker" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Jugos</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-beer" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Vinos y Licores</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-bug" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Higiene</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-heart" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Farmacia</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-bowtie" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Bebés</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="md-snow" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Congelados</Text>
                <Icon name="ios-arrow-round-forward" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </ScrollView>

        {this.state.loggedIn
          ? <View>
              <View style={styles.container}>
                <View>
                  <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Perfil()}>
                    <Image style={styles.usuario} source={img}/>
                    <Text style={styles.text}>Pedido{'\n'}Status:
                      <Text style={styles.textoc}>En Camino</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.cerrarS} onPress={() => this.close()}>
                <Text style={styles.textCerrar} onPress={this.salir.bind(this)}>Cerrar Sesión</Text>
              </TouchableOpacity>
            </View>

          :
              <View style={styles.container}>
                <View>
                  <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Login()}>
                    <Image style={styles.usuario} source={img2}/>
                      <Text style={styles.text}>Inicia Sesión</Text>
                  </TouchableOpacity>
                </View>
              </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'black'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 50,
    borderColor: '#000',
    backgroundColor: 'black'
  },
  usuario: {
    width: 60,
    height: 60,
    margin: 20,
    marginTop: 30
  },
  usuarioImagen: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: 'white'
  },
  texto: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15
  },
  textoc: {
    color: 'green'
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'red',
    margin: 5
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  content: {
    width: width / 2 + 59
  },
  icon: {
    marginRight: 10,
    marginLeft: 15
  },
  iconoo: {
    color: 'orange',
    fontSize: 20,
    marginRight: 5
  },
  textoC: {
    color: 'white'
  },
  cerrarS: {
    backgroundColor: 'black',
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCerrar: {
    color: 'white',
    fontSize: 15
  },
  estiloTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon2: {
    fontSize: 25,
    color: 'orange',
    marginRight: 5
  },
  nolog: {
    color: 'white'
  }
});
