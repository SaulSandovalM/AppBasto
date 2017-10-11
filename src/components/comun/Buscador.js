import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity, Text, View} from 'react-native';
import {Header, Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Buscador extends Component {
  render() {
    return (
      <Header searchBar rounded style={styles.header}>
        <View style={styles.view}>
          <Icon name="menu"/>
        </View>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="Buscar"/>
          <Icon name="cart"/>
        </Item>
        <Button transparent>
          <Text>Buscar</Text>
        </Button>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  }
});

module.export = Buscador;
