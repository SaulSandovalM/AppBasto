import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Body, ListItem} from 'native-base';
import Select from './Select';
import img from '../../assets/imgs/bienvenida.jpg';

export default class ListaCompra extends Component <{}> {
  render () {
    return (
      <ListItem>
        <Body>
        <Thumbnail square size={80} source={img}/>
        </Body>
        <Body>
          <Text>Manzanas</Text>
        </Body>
        <Select/>
        <Body>
          <Text>$25.00</Text>
        </Body>
      </ListItem>
    );
  }
};

const styles = StyleSheet.create({
  totalP: {
    marginLeft: 15,
  }
});
