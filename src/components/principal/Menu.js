import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img from '../../assets/imgs/usuario.jpg';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window')

export default class Menu extends Component < {} > {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Perfil()}>
              <Image style={styles.usuario} source={img}/>
              <Text style={styles.text}>Saul Sandoval</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content}>
          <TouchableOpacity>
            <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
                <Text style={styles.texto}>Categoria 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
                <Text style={styles.texto}>Categoria 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
                <Text style={styles.texto}>Categoria 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
                <Text style={styles.texto}>Categoria 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
                <Text style={styles.texto}>Categoria 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#191919'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 50,
    borderColor: '#000'
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
    fontSize: 20,
    color: 'white'
  },
  texto: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
});
