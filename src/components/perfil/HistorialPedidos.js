import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SwipeRow, Icon, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class HistorialPedidos extends Component {
  render() {
    return (
      <SwipeRow
        leftOpenValue={75}
        rightOpenValue={-75}
        left= {
          <Button success onPress={() => Actions.Carrito()}>
            <Icon active name="add"/>
          </Button>
        }
        body={
          <View>
            <Text>Orden 1</Text>
          </View>
        }
        right= {
          <Button danger onPress={() => alert('Trash')}>
            <Icon active name="trash"/>
          </Button>
        }/>
    );
  }
}

const styles = StyleSheet.create({
  thub: {
    margin: 10,
    height: 80,
    width: 80
  },
  h1: {
    marginLeft: 20,
    color: 'white'
  },
  text: {
    marginLeft: 20,
    color: 'white'
  },
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  },
  container: {
    backgroundColor: 'white'
  },
  view: {
    alignSelf: 'center'
  },
  orden: {
    alignSelf: 'center',
    margin: 20,
    fontSize: 20
  }
});
