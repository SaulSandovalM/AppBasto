import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Body, ListItem, Button, Icon} from 'native-base';

export const ListaCompra = ({item, addAmount, substractAmount, deleteItem}) => {
  return (
    <ListItem>
      <Body>
      <Thumbnail square size={80} source={{uri: item.product.image}}/>
      </Body>
      <Body>
        <Text>{item.product.name}</Text>
      </Body>
      <Body>
        <Button light onPress={()=>substractAmount(item)}>
          <Text>-</Text>
        </Button>
        <Text>{item.amount}</Text>
        <Button light onPress={()=>{addAmount(item)}}>
          <Text>+</Text>
        </Button>
        <Button light onPress={()=>{deleteItem(item)}}>
          <Text>X</Text>
        </Button>
      </Body>
      <Body>
        <Text>$ {item.product.price}</Text>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  totalP: {
    marginLeft: 15,
  }
});
