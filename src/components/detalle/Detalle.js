import React, {Component} from 'react';
import {View, Image, ScrollView, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Card, CardItem, Left, Right, Body, Button, Icon, Container, StyleProvider} from 'native-base';
import Buscador from '../comun/Buscador';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Detalle extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Buscador/>
        <ScrollView >
          <View style={styles.view}>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>$50.00</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>Precio</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </View>

          <View style={styles.view}>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>$50.00</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>Precio</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </View>

          <View style={styles.view}>
            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>$50.00</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Nombre</Text>
                    <Text note>Precio</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{
                  uri: 'Image URL'
                }} style={styles.img}/>
              </CardItem>
              <CardItem>
                <Body>
                  <Button transparent>
                    <Text>Agregar al Carrito</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  img: {
    height: 100,
    width: null,
    flex: 1
  }
});
