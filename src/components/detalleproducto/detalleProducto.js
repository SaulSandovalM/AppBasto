import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Header, Card} from '../comun';

export default class detalleProducto extends Component < {} > {
  render() {
    return (
      <View>
        <Header headerText={'ProductoID'}/>
        <View style={styles.view}>
          <Card>
            <Image source={{
              uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
            }} style={styles.img}/>
          </Card>

          <View style={styles.view}>
            <Text>ProductoID</Text>
            <Text>Descripción</Text>
            <Text>Cantidad</Text>
            <Text>Agregar al carrito</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 200
  },
  img: {
    height: 200,
    width: 200,
    flex: 1
  },
  view2: {
    marginTop: 10
  }
});
