import React from 'react';
import {Card, Text} from 'native-base';
import {TouchableOpacity, View, Image, StyleSheet, Alert} from 'react-native';

export const ProductItem = ({image, name, addToCart, item, price, offer_price}) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('PEDIDO', `¿Deseas agregar ${name} al carrito?`, [
        {
          text: 'Ok',
          onPress: () => addToCart(item)
        }, {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
    ], {cancelable: false})}>
      <Card style={styles.card}>
        <Image source={{
            uri: image
          }} style={styles.img}/>

        {
          !offer_price
          ? <View style={styles.view}></View>
          : <View style={styles.view}>
              <Text style={styles.text}>{'\n'}$ {offer_price} </Text>
            </View>
        }

        <View style={styles.view5}>
          <Text style={styles.precio}>{name}</Text>
        </View>
        <View style={styles.view2}>
        <Text style={styles.precio2}>$ {price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view5: {
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 2,
    marginTop: 100,
    width: 160,
    justifyContent: 'center'
  },
  img: {
    height: 150,
    width: 160,
    flex: 1
  },
  precio: {
    marginTop: 5,
    fontSize: 14,
    zIndex: 2,
    backgroundColor: 'white'
  },
  precio2: {
    textDecorationLine: 'line-through',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },
  view: {
    transform: [{ rotate: '45deg'}],
    backgroundColor: 'red',
    zIndex: 1,
    width: 75,
    alignItems: 'center',
    opacity: 0.8,
    marginLeft: 110,
    marginTop: -155,
  },
  card: {
    width: 160,
    overflow: 'hidden'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  view2: {
    justifyContent: 'center',
    width: 160,
    flexDirection: 'row',
    backgroundColor: 'white'
  }
});
