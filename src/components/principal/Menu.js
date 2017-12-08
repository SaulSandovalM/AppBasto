import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img2 from '../../assets/imgs/nouser.png';
import {Container, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export const Menu = ({lista, listaP, addToCart, loggedIn, salir, listaO, user}) => {
  console.log(lista);
  console.log(listaP);
  console.log(listaO);
  console.log(user);

  return (
      <View style={styles.menu}>
        <ScrollView style={styles.content}>

          <ListItem itemDivider>
            <Text>CATEGORIAS</Text>
          </ListItem>

            {
              lista.length > 0
                ? lista.map((category, index) => {
                    return (
                      <ListItem icon key={index}>
                        <Body>
                        <TouchableOpacity style={styles.touchable}
                          onPress={() => Actions.Detalle({lista:listaP, slug:category.slug, addToCart})}>
                          <Text style={styles.textoC}>{category.name}</Text>
                          <Icon name="ios-arrow-forward-outline" style={styles.icon2}/>
                        </TouchableOpacity>
                        </Body>
                      </ListItem>
                    )
                })
                : <Text>Por el momento no existen categorías</Text>
            }
        </ScrollView>

      {
          loggedIn
      ? <View>
          <View style={styles.container}>
            <View>
              <TouchableOpacity style={styles.usuarioImagen}
                onPress={() => Actions.Perfil({listaO:listaO, user:user})}>
                <Thumbnail style={styles.usuario} source={img2}/>
                <Text style={styles.text}>Pedido{'\n'}Status:
                  <Text style={styles.textoc}>En Camino</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.cerrarS}>
            <Text style={styles.textCerrar} onPress={salir}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

      : <View>
          <View>
            <TouchableOpacity style={styles.cerrarS} onPress={() => Actions.Login()}>
              <Text style={styles.textCerrar}>Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );
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
    marginLeft: 20,
    marginRight: 15,
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
    color: '#666666',
    fontSize: 20,
    marginRight: 5
  },
  textoC: {
    color: '#666666'
  },
  cerrarS: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCerrar: {
    color: '#666666',
    fontSize: 15,
    margin: 10
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
