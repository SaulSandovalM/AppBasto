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
      <Body style={styles.botones}>
        <Button light onPress={()=>substractAmount(item)} style={styles.boton}>
          <Text>-</Text>
        </Button>
        <Text style={styles.text}>{item.amount}</Text>
        <Button light onPress={()=>{addAmount(item)}} style={styles.boton}>
          <Text>+</Text>
        </Button>
      </Body>
      <Body style={styles.botones}>
        <Text style={styles.text}>$ {item.product.price}</Text>
        <Button light onPress={()=>{deleteItem(item)}} style={styles.boton}>
          <Icon name="trash"/>
        </Button>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  totalP: {
    marginLeft: 15,
  },
  botones: {
    flexDirection: 'row'
  },
  boton: {
    backgroundColor: 'transparent', elevation: 0
  },
  text: {
    marginTop: 13
  }
});
