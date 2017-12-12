import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';
import {Container, Content, List, ListItem, Body, Right, Left, Thumbnail, Button, CardItem, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/map.png';
import Cabecera from '../comun/Cabecera';
//Redux
import {connect} from 'react-redux';
import {addToCart, addAmount, substractAmount, deleteItem, saveOrder} from '../../actions/cartActions';

const header = Platform.select({
  ios: <Cabecera/>
});

class ResumenOrden extends Component <{}> {
  render() {
    return (
      <Container>
        {header}
        <Content style={styles.back}>
          <Text style={styles.text2}>Resumen de orden</Text>
          <Image source={img} style={styles.img}/>

          <Text style={styles.text}>Productos</Text>
                {this.props.cart.map((item, index)=>{
                    console.log(item)
                    return <ListaResumen
                              item={item}
                              addAmount={this.props.addAmount}
                              substractAmount={this.props.substractAmount}
                              deleteItem={this.props.deleteItem}
                              key={index}
                            />
                })}

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

const mapStateToProps = state => {
  return {cart: state.cart};
};

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

export default ResuemnOrden = connect(mapStateToProps, {addToCart, addAmount, substractAmount, deleteItem, saveOrder})(ResumenOrden);
