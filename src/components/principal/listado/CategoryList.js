import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, ScrollView} from 'react-native';
import {Icon, Spinner, Content} from 'native-base';
import {ProductItem} from './ProductItem';
import {Actions} from 'react-native-router-flux';
//redux
import {connect} from 'react-redux';
import {listaFetch} from '../../../actions/productosActions';
import {addToCart, addAmount, substractAmount} from '../../../actions/cartActions'
import _ from 'lodash';

class CategoryList extends Component {
  componentWillMount() {
    this.props.listaFetch();
    console.log(this.props.lista)
  }

  spinnerr() {
    if (!this.props.fetched)
      return <Spinner/>;
    }

  render() {
    const {fondo, categoria, lista, slug, addToCart, addAmount, substractAmount} = this.props;
    let filtrados = lista.filter(f=>{return f.category===slug && f.in_offer===true});

    return (
      <ScrollView style={styles.content}>
        <ImageBackground source={fondo} style={styles.fondo}>
          <View style={styles.view4}>
            <Text onPress={() => Actions.Detalle()} style={styles.texto}>
              {categoria}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.view2}>
          <Content style={styles.scroll}>
            {this.spinnerr()}
            {
              filtrados.map((item, index) => {
                let cartItem = {
                  product: item,
                  amount: 1
                }
                return <ProductItem key={index} index={index} {...item} addToCart={addToCart} item={cartItem}/>

              })
            }
          </Content>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.cart)
  const lista = _.map(state.lista, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  return {lista, fetched: lista.length > 0, cart:state.cart};
};

const styles = StyleSheet.create({
  view2: {
    flexDirection: 'row'
  },
  view4: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: '#fff'
  },
  fondo: {
    justifyContent: 'center',
    height: 50,
    width: null
  },
  texto: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  },
  scroll: {
    marginBottom: 10
  }
});

export default CategoryList = connect(mapStateToProps, {listaFetch, addToCart, addAmount, substractAmount})(CategoryList);
