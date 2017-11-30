import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Body, ListItem, Button, Icon} from 'native-base';
import Select from './Select';
import img from '../../assets/imgs/bienvenida.jpg';

export const ListaCompra = ({item, addAmount, substractAmount, deleteItem}) => {

    return (
      <ListItem >
        <Body style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <Thumbnail square size={80} source={{uri: item.product.image}}/>

          <Text>{item.product.name}</Text>


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
