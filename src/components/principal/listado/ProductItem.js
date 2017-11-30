import React from 'react';
import {Card, Text} from 'native-base';
import {TouchableOpacity, View, Image, StyleSheet, Alert} from 'react-native';

export const ProductItem = ({image}) => {
  const showAlert = () => {
    Alert.alert('Este producto ha sido agregado al carrito ^_^')
  }

  return (
    <TouchableOpacity onPress={showAlert}>
      <Card>
        <Image source={{
            uri: image
          }} style={styles.img}/>
        <View style={styles.view5}>
          <Text style={styles.precio}>Pinol
          <Text style={styles.precio2}>{'\n'}$ 50.00 </Text>$ 40.00</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view5: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  img: {
    height: 150,
    width: 150,
    flex: 1
  },
  precio: {
    marginTop: 5,
    fontSize: 12
  },
  precio2: {
    textDecorationLine: 'line-through',
    color: 'red',
    fontSize: 12
  }
});
