import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity, Text, View} from 'react-native';
import {Header, Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Buscador extends Component {
  render() {
    return (
      <Header searchBar style={styles.header}>
        <View style={styles.view}>
          <Icon name="menu" style={{color: "white"}}/>
        </View>
        <Item style={{backgroundColor: '#d9d9d9'}}>
          <Icon name="ios-search"/>
          <Input placeholder="Buscar"/>
        </Item>
        <View style={styles.view}>
          <Icon name="cart" style={{color: "white"}}/>
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
  }
});

module.export = Buscador;
