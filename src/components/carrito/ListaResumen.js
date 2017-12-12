import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Body, ListItem, Right, Left} from 'native-base';

export const ListaResumen = ({item, addAmount, substractAmount, deleteItem}) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{uri: item.product.image}}/>
      </Left>
      <Body>
      <Text>{item.product.name}</Text>
      <Text note>{item.amount}</Text>
      </Body>
      <Right>
        <Text note>$ {item.product.price}</Text>
      </Right>
    </ListItem>
  );
}
