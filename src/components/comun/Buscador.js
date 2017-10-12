import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity, Text, View} from 'react-native';
import {Header, Button, Icon, Item, Input, Badge} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Buscador extends Component {
  render() {
    return (
      <Header searchBar style={styles.header}>
        <View style={styles.view} onPress={() => props.toggle()}>
          <Icon name="menu" style={styles.color}/>
        </View>
        <Item style={{backgroundColor: '#000'}}>
          <Icon name="ios-search" style={styles.color}/>
          <Input placeholder="Buscar"/>
        </Item>
        <View style={styles.view}>
          <Icon name="cart" style={styles.color}/>
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black"
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  },
  color: {
    color: "white"
  }
});

module.export = Buscador;
