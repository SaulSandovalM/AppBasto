import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Container, Content, List, ListItem, Body, Right, Left, Thumbnail, Button, CardItem, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/map.png';

export default class Pedido extends Component <{}> {
  render() {
    return (
      <Container>
        <Content style={styles.back}>
          <Text style={styles.text2}>Resumen de orden</Text>
          <Image source={img} style={styles.img}/>

          <Text style={styles.text}>Productos</Text>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={img}/>
                </Left>
                <Body>
                <Text>Manzana</Text>
                <Text note>2</Text>
                </Body>
                <Right>
                  <Text note>$ 50.00</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={img}/>
                </Left>
                <Body>
                <Text>Manzana</Text>
                <Text note>2</Text>
                </Body>
                <Right>
                  <Text note>$ 50.00</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={img}/>
                </Left>
                <Body>
                <Text>Manzana</Text>
                <Text note>2</Text>
                </Body>
                <Right>
                  <Text note>$ 50.00</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={img}/>
                </Left>
                <Body>
                <Text>Manzana</Text>
                <Text note>2</Text>
                </Body>
                <Right>
                  <Text note>$ 50.00</Text>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={img}/>
                </Left>
                <Body>
                <Text>Manzana</Text>
                <Text note>2</Text>
                </Body>
                <Right>
                  <Text note>$ 50.00</Text>
                </Right>
              </ListItem>
            </List>

        </Content>

        <View style={styles.back}>
          <ListItem avatar>
            <Left>
              <Icon name="cart" style={styles.icon}/>
            </Left>
            <Body>
            <Text style={styles.letra}>Cantidad de productos</Text>
            <Text note style={styles.letra}>5</Text>
            </Body>
            <Right>
              <Text style={styles.letra}>Total</Text>
              <Text note style={styles.letra}>$ 250.00</Text>
            </Right>
          </ListItem>
      </View>

        <Button block style={styles.boton} onPress={()=>Actions.Pedido()}>
          <Text style={styles.text}>Finalizar Orden</Text>
        </Button>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  },
  color2: {
    color:'green'
  },
  back: {
    backgroundColor: 'white'
  },
  boton: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#8e1c58',
    borderWidth: 2
  },
  text: {
    color: '#8e1c58',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 10
  },
  text2: {
    color: '#8e1c58',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 10
  },
  icon: {
    color: 'white',
    width: 56
  },
  letra: {
    fontWeight: 'bold'
  }
});
