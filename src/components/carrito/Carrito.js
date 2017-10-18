import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container, StyleProvider, Thumbnail, Body, List, ListItem, Card, CardItem, Button} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/bienvenida.jpg';
import Select from './Select';
import {Actions} from 'react-native-router-flux';

export default class Carrito extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.fondo}>
          <Cabecera/>
          <List style={styles.list}>
            <ListItem>
              <Body>
                <Text style={styles.text1}>Imagen</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Nombre</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Precio U</Text>
              </Body>
              <Body>
                <Text style={styles.text1}>Cantidad</Text>
              </Body>
              <Body>
                <Text style={styles.total}>Total</Text>
              </Body>
            </ListItem>
          </List>
          <ScrollView>

            <List>
              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Select/>
                <Body>
                  <Text style={styles.totalP}>$25.00</Text>
                </Body>
              </ListItem>
            </List>
          </ScrollView>

          <View style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$500.00 MXN</Text>
            </CardItem>

            <Button block style={styles.boton} onPress={() => Actions.StatusOrden()}>
              <Text style={styles.text}>Pagar</Text>
            </Button>
          </View>

        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    color: 'black',
    fontWeight: 'bold'
  },
  total: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  totalP: {
    marginLeft: 15
  },
  boton: {
    backgroundColor: 'orange',
    width: '100%'
  },
  list: {
    backgroundColor: 'white'
  },
  cardItem: {
    alignSelf: 'center',
    flexDirection: 'column'
  },
  pago: {
    fontSize: 20
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fondo: {
    backgroundColor: 'white'
  }
});
