import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Buscador = ({onSearch, toggle}) => {
  return (
    <Header searchBar style={styles.header}>
      <View style={styles.view} >
        <Icon name="menu" style={styles.color} onPress={toggle}/>
      </View>
      <Item style={styles.item}>
        <Icon name="ios-search" style={styles.icon}/>
        <Input onChangeText={onSearch} placeholder="Buscar" style={styles.input}/>
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
    backgroundColor: 'white',
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  color: {
    color: '#878787',
    fontSize: 35
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#878787',
    borderWidth: 1
  },
  icon: {
    color: '#878787'
  },
  input: {
    borderRadius: 50
  }
});
