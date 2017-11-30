import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container, StyleProvider, Body, List, ListItem, CardItem, Button} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {Actions} from 'react-native-router-flux';
import {ListaCompra} from './ListaCompra';
//Redux
import {connect} from 'react-redux';
import {addToCart, addAmount, substractAmount, deleteItem} from '../../actions/cartActions'

class Carrito extends Component < {} > {
  getTotal=()=>{
    let total = 0;
    for (let t of this.props.cart ){
      let subtotal = t.product.price * t.amount;
      total += subtotal
    }
    return total
  };

  render() {
    const total = this.getTotal()
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.fondo}>
          <Cabecera/>


          <ScrollView>

              {this.props.cart.map(item=>{
                  return <ListaCompra item={item}
                                      addAmount={addAmount}
                                      substractAmount={substractAmount}
                                      deleteItem={deleteItem}
                  />

              })}

          </ScrollView>

          <View style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$ {total}</Text>
            </CardItem>

            <Button block style={styles.boton} onPress={() => Actions.Principal()}>
              <Text style={styles.text}>Pagar</Text>
            </Button>
          </View>

        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
    return {cart:state.cart};
};


export default Carrito = connect(mapStateToProps, {addToCart, addAmount, substractAmount, deleteItem})(Carrito);

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    color: 'black',
    fontWeight: 'bold'
  },
  total: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  totalP: {
    marginLeft: 15
  },
  boton: {
    backgroundColor: '#8e1c58',
    width: '100%'
  },
  list: {
    backgroundColor: 'white'
  },
  cardItem: {
    alignSelf: 'center',
    flexDirection: 'column'
  },
  pago: {
    fontSize: 20
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fondo: {
    backgroundColor: 'white'
  }
});
