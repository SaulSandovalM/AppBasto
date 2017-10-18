import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

export default class StatusOrder extends Component < {} > {
  render() {
    return (
      <Container>
        <Header/>
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
