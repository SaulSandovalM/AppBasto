import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img from '../../assets/imgs/usuario.jpg';
import {Container, List, ListItem, Icon, Left, Body, Right, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class Menu extends Component < {} > {
  render() {
    return (
      <View style={styles.menu}>
        <ScrollView style={styles.content}>
          <List>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={styles.iconoo }/>
              </Left>
              <Body>
                <Text style={styles.textoC}>Despensa</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-ice-cream" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Lácteos</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-nutrition" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Frutas y Verduras</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="pig" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Carnes y Pescados</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Panaderia</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-beaker" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Jugos</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="beer" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Vinos y Licores</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="needle" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Higiene</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="heart" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Farmacia</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="odnoklassniki" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Bebés</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-snow" style={styles.iconoo}/>
              </Left>
              <Body>
              <Text style={styles.textoC}>Congelados</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={styles.iconoo} />
                </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
        </ScrollView>

        <View style={styles.container}>
          <View>
            <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Perfil()}>
              <Image style={styles.usuario} source={img}/>
              <Text style={styles.text}>Pedido{'\n'}Status: <Text style={styles.textoc}>En Camino</Text></Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.cerrarS} onPress={()=> alert('Cerraste sesión perro')}>

            <Text style={styles.textCerrar} >Cerrar Sesión</Text>

        </TouchableOpacity>
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
  iconoo:{
    color:'orange'
  },
  textoC: {
    color: 'white'
  },
    cerrarS:{
        backgroundColor:'black',
        borderWidth:3,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textCerrar:{
        color:'white',
        fontSize:15
    }
});
