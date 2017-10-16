import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {Icon, Content, Container, Thumbnail, H1, List, ListItem, Body} from 'native-base';
import img2 from '../../assets/imgs/usuario.jpg';
import Cabecera from '../comun/Cabecera';
import img from '../../assets/imgs/bienvenida.jpg';

export default class Perfil extends Component {
  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        {/*<ImageBackground source={img} style={styles.img}>*/}
        <Cabecera/>
        <Content>
          <View style={{alignSelf: 'center'}}>
            <View style={{alignSelf: 'center'}}>
          <Thumbnail source={img2} style={styles.thub}/>
          </View>
          <H1 style={styles.h1}>Saul Sandoval M</H1>
          <Text style={styles.text}>sauldevelop@gmail.com</Text>
          {/*</ImageBackground>*/}
        </View>

        <List>
          <ListItem>
            <Thumbnail square size={80} source={img}/>
            <Body>
              <Text>Pedido 1</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={img}/>
            <Body>
              <Text>Pedido 2</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={img}/>
            <Body>
              <Text>Pedido 3</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={img}/>
            <Body>
              <Text>Pedido 4</Text>
            </Body>
          </ListItem>
        </List>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thub: {
    margin: 10,
    height: 80,
    width: 80
  },
  h1: {
    marginLeft: 20
  },
  text: {
    marginLeft: 20
  },
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  }
});
