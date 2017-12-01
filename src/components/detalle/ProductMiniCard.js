import React from 'react';
import {Icon, Card, CardItem, Left, Text, Button} from 'native-base';
import {Image, StyleSheet} from 'react-native';

export const ProductMiniCard = ({sellPrice, name, image}) => {
  return (
    <Card style={styles.estiloCard}>
      <CardItem style={styles.estiloCardI}>
        <Left>
          <Text>{name}</Text>
          <Text note>${sellPrice}</Text>
        </Left>
      </CardItem>
      <Image source={{uri: image}} style={styles.img}/>
      <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
        <Text>Agregar al Carrito</Text>
        <Icon name="cart" style={styles.icon}/>
      </Button>
    </Card>
  );
};

//ProductMiniCard.propTypes = {};

const styles = StyleSheet.create({
  estiloCard: {
    borderColor: '#8e1c58',
    borderWidth: 3,
    minWidth: '100%',
    height: 300,
    flex:1
  },
  estiloCardI: {
    borderColor: '#8e1c58',
    borderWidth: 1
  },
  btn: {
    alignSelf: 'stretch',
    borderColor: '#8e1c58'
  },
  img: {
    height: 100,
    width: null,
    flex: 1,
    borderColor: '#8e1c58',
    borderWidth: 1
  },
  icon: {
    color: '#8e1c58'
  }
});
