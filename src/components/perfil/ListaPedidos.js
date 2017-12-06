import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {List, ListItem, Body, Right, Thumbnail, Button, Left} from 'native-base';
import Cabecera from '../comun/Cabecera';

export default class ListaPedidos extends Component {
  render() {
    return (
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
            source={{uri: 'http://www.euroresidentes.com/alimentacion/comida/wp-content/uploads/sites/3/2017/02/comidas-tipicas-argentina-milanesa.jpg'}} />
          </Left>
          <Body>
            <Text>Manzanas</Text>
            <Text note>2 kg</Text>
          </Body>
          <Right>
            <Text note>$ 50.00</Text>
          </Right>
        </ListItem>
      </List>
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
