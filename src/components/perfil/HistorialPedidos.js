import React, {Component} from 'react';
import {Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ListAvatarExample extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <Body>
            <Text onPress={()=> Actions.DetallePedido()}>06/12/17, 2:15 p.m</Text>
            <Text note>Fecha</Text>
          </Body>
          <Right>
            <Text>$ 500.00</Text>
            <Text note style={styles.color}>Recibido</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: 'green'
  }
});
