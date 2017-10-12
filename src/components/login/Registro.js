import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Header, Item, Button, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Registro extends Component < {} > {
  render() {
    return (
      <Container style={styles.fondo}>
        <Content>
          <Text>Hola</Text>
          <Input placeholder="hola"/>
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
