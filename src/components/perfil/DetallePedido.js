import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {Container, Content, Title, List, ListItem, Body, Right, Thumbnail, Button, Icon, Left} from 'native-base';
import Cabecera from '../comun/Cabecera';
import HistorialPedidos from './HistorialPedidos';
import ListaPedidos from './ListaPedidos';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Perfil extends Component {
  render() {
    return (
      <Container style={styles.container}>
        {header}
        <Content>

          <Title style={styles.color}>Detalle del pedido</Title>

          <HistorialPedidos/>
          <ListaPedidos/>
          <ListaPedidos/>
          <ListaPedidos/>
          <ListaPedidos/>
          <ListaPedidos/>
          <ListaPedidos/>

          <Text style={styles.repar}>Tu repartidor fue Saul</Text>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  color: {
    color: 'black',
    marginTop: 20
  },
  repar: {
    fontSize: 16,
    color: 'black',
    margin: 15
  }
});
