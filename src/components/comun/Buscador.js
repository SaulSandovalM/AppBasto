import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity, Text, View} from 'react-native';
import {Header, Button, Icon, Item, Input, Badge} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Buscador = (props) => {
    return (
      <Header searchBar style={styles.header}>
        <View style={styles.view} >
          <Icon name="menu" style={styles.color} onPress={props.toggle}/>
        </View>
        <Item style={styles.item}>
          <Icon name="ios-search" style={styles.icon}/>
          <Input placeholder="Buscar" style={styles.input}/>
        </Item>
        <View style={styles.view}>
          <Icon name="ios-cart" style={styles.color} onPress={() => Actions.Carrito()}/>
        </View>
      </Header>
    );
};

export default Buscador;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange"
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  color: {
    color: "white",
    fontSize: 35
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15
  },
  icon: {
    color: "#000"
  },
  input: {
    borderRadius:50
  }
});
