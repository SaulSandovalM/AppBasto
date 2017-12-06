import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Icon, Item, Input, Badge} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Buscador = ({onSearch, toggle, cart}) => {
  return (
    <Header searchBar style={styles.header}>
      <View style={styles.view} >
        <Icon name="menu" style={styles.color} onPress={toggle}/>
      </View>
      <Item style={styles.item}>
        <Icon name="ios-search" style={styles.icon}/>
        <Input onChangeText={onSearch} placeholder="Buscar" style={styles.input}/>
      </Item>

      <View style={styles.view} >
        <Icon name="md-cart" style={styles.color}  onPress={() => Actions.Carrito()}/>
        <View style={styles.nView}>
          <Text style={styles.nTextView}>{cart}</Text>
        </View>
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
    padding: 20,
      alignItems:'center',
  },
  color: {
    color: '#666666',
    fontSize: 38,
    zIndex:1,
    position:'absolute',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#666666',
    borderWidth: 1
  },
  icon: {
    color: '#666666'
  },
  input: {
    borderRadius: 50
  },
  nView:{
    alignItems:'center',
    zIndex: 2,
    position:'absolute',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  nTextView:{
    color: 'white',
    paddingBottom: 12
  }
});
