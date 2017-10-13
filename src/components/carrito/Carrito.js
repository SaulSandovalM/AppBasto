import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container, StyleProvider, Right, Thumbnail, Body, List, ListItem, Button, Card, CardItem} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/bienvenida.jpg';

export default class Detalle extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Cabecera/>
            <ScrollView>
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
                  <Text style={styles.text1}>Total</Text>
                </Body>
              </ListItem>
              </List>

            <List>
              <ListItem>
                <Thumbnail square size={80} source={img} />
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img} />
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img} />
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img} />
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>
            </List>
          </ScrollView>

          <Card>
            <CardItem style={{alignSelf: 'center', flexDirection: 'column'}}>
            <Text>Total a Pagar</Text>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>$500.00 MXN</Text>
            </CardItem>
          </Card>

          <Button block style={styles.boton}>
            <Text style={styles.text}>Pagar</Text>
          </Button>

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
    color: 'white',
  },
  boton: {
    backgroundColor: 'yellow',
    width: '100%',
  },
  list: {
    backgroundColor: 'black'
  }
});
