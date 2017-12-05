import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Button, Icon, Container, StyleProvider} from 'native-base';
import Cabecera from '../comun/Cabecera';
import {ProductItem} from '../comun/ProductItem';

export const Detalle = ({lista, slug, addToCart}) =>{
  console.log(lista)
  console.log(slug)
  let filtrados = lista.filter(f=>{return f.category===slug });
  console.log(filtrados)
  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.lista;
    const rEx = new RegExp(value, 'i');
    results = results.filter(p => rEx.test(p.name));
    this.setState({results});
  };

  return (
      <View style={styles.view}>
          <Cabecera/>
          <ScrollView >
              <View style={styles.viewP}>
          {
            filtrados.map((item, index) => {
                let cartItem = {
                    product: item,
                    amount: 1
                }
                return (
                    <ProductItem key={index} index={index} {...item} addToCart={addToCart} item={cartItem}/>
                )
            })
          }
              </View>
          </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  viewP: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around'
  }
});
