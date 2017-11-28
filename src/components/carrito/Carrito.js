import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, Platform} from 'react-native';
import {Container, StyleProvider, Body, List, ListItem, CardItem, Button, Toast} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {Actions} from 'react-native-router-flux';
import ListaCompra from './ListaCompra';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Carrito extends Component <{}> {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.fondo}>
          {header}

          <ScrollView>
            <ListaCompra/>
            <ListaCompra/>
            <ListaCompra/>
            <ListaCompra/>
            <ListaCompra/>
            <ListaCompra/>
            <ListaCompra/>
          </ScrollView>

          <View style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$500.00 MXN</Text>
            </CardItem>

            <Button block style={styles.boton} onPress={()=>Actions.Maps()}>
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
    color: '#8e1c58',
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
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#8e1c58',
    borderWidth: 2
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
