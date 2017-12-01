import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img from '../../assets/imgs/usuario.jpg';
import img2 from '../../assets/imgs/nouser.png';
import {Container, List, ListItem, Left, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {firebaseAuth} from '../firebase/Firebase';

const {width, height} = Dimensions.get('window');

export default class Menu extends Component <{}> {
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

          <ListItem itemDivider>
              <Text>Categorias</Text>
            </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="md-star" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Principal()}>
                <Text style={styles.textoC}>Productos Destacados</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="md-rose" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Frutos Secos y Semillas</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
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
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-basket" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Abarrotes</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => Actions.Detalle()}>
            <Left>
              <Icon name="ios-basket" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Materias Primas</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-restaurant" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Desechables</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-basket" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Cremeria</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
              </TouchableOpacity>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="ios-bug" style={styles.iconoo}/>
            </Left>
            <Body>
              <TouchableOpacity style={styles.touchable} onPress={() => Actions.Detalle()}>
                <Text style={styles.textoC}>Productos de Limpieza</Text>
                <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
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

          : <View style={styles.container}>
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
    backgroundColor: 'white'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 50,
    backgroundColor: 'white'
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
    color: '#8e1c58'
  },
  texto: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15
  },
  textoc: {
    color: 'green'
  },
  content: {
    width: width / 2 + 59
  },
  icon: {
    marginRight: 10,
    marginLeft: 15
  },
  iconoo: {
    color: '#8e1c58',
    fontSize: 20,
    marginRight: 5
  },
  textoC: {
    color: '#8e1c58'
  },
  cerrarS: {
    backgroundColor: 'white',
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCerrar: {
    color: '#8e1c58',
    fontSize: 15
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon2: {
    fontSize: 25,
    color: '#8e1c58',
    marginRight: 5
  }
});
