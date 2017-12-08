import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, Platform} from 'react-native';
import {Container, StyleProvider, Body, List, ListItem, CardItem, Button, Toast} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {Actions} from 'react-native-router-flux';
import {ListaCompra} from './ListaCompra';
//Redux
import {connect} from 'react-redux';
import {addToCart, addAmount, substractAmount, deleteItem, saveOrder} from '../../actions/cartActions';
import firebase from '../../components/firebase/Firebase';

const header = Platform.select({
  ios: <Cabecera/>
});

class Carrito extends Component <{}> {
  state={
    order:{
      total:0,
      products:[],
      isDelivered:false,
      user:''
    }
  };

  sendOrder = () => {
    let fecha = new Date();
    let user = firebase.auth().currentUser;
    let email;
    if (user !== null) {
          email = user.email;
          Actions.Maps()
    }else{email='NO USER'}
    fecha = fecha.getTime();
    let {order} = this.state;
    order.total = this.getTotal();
    order.products = this.props.cart;
    order.date = fecha;
    order.user = email;
    console.log(this.state.order);
    this.props.saveOrder(order).then((snap)=>Toast.show({
            text: 'Confirma tu ubicacion',
            position: 'bottom',
            buttonText: 'Okay'
          }))
      .catch((error)=>Actions.Login(), Toast.show({
              text: 'Inicia Sesion para Continuar',
              position: 'bottom',
              buttonText: 'Okay'
            }))
  };

  getTotal = () => {
    let total = 0;
    for (let t of this.props.cart) {
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
          {header}

          <ScrollView>
              {this.props.cart.map((item, index)=>{
                  console.log(item)
                  return <ListaCompra
                            item={item}
                            addAmount={this.props.addAmount}
                            substractAmount={this.props.substractAmount}
                            deleteItem={this.props.deleteItem}
                            key={index}
                          />
              })}
          </ScrollView>

          <View style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$ {total}</Text>
            </CardItem>

            <Button block style={styles.boton} onPress={(this.sendOrder)}>
              <Text style={styles.text}>Enviar Orden</Text>
            </Button>
          </View>

        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {cart: state.cart};
};

const styles = StyleSheet.create({
  text: {
    color: '#8e1c58',
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
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#8e1c58',
    borderWidth: 2
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

export default Carrito = connect(mapStateToProps, {addToCart, addAmount, substractAmount, deleteItem, saveOrder})(Carrito);
