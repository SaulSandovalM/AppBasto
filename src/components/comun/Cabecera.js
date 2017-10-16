import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Cabecera extends Component {
  atras() {
   Actions.pop()
 }

  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={this.atras.bind(this)}>
            <Icon name='ios-arrow-back' style={styles.color}/>
          </TouchableOpacity>
          </Left>
          <Body/>
          <Right/>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1CAF57"
  },
  color: {
    color: "white",
  }
});
