import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Container, Content, Card, CardItem, Body} from 'native-base';
import Cabecera from '../comun/Cabecera';

export default class StatusOrder extends Component < {} > {
  render() {
    return (
      <Container>
        <Cabecera/>
        <Content>
          <View>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Orden Recibida . .
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Text>
                  Comprando . .
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Text>
                  En Camino . .
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Text>
                  Recibido
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'white'
  }
});
