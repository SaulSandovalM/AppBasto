import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container, StyleProvider, Thumbnail, Body, List, ListItem, Card, CardItem, Button} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/bienvenida.jpg';
import Select from './Select';

export default class Detalle extends Component < {} > {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
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

          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$500.00 MXN</Text>
            </CardItem>

            <Button block style={styles.boton}>
              <Text style={styles.text}>Pagar</Text>
            </Button>
          </Card>

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
    color: 'white'
  },
  total: {
    color: 'white',
    marginLeft: 10
  },
  totalP: {
    marginLeft: 15
  },
  boton: {
    backgroundColor: 'yellow',
    width: '100%'
  },
  list: {
    backgroundColor: 'black'
  },
  cardItem: {
    alignSelf: 'center',
    flexDirection: 'column'
  },
  pago: {
    fontSize: 20
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
