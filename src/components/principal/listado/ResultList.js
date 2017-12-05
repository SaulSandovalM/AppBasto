import React from 'react';
import {ProductMiniCard} from '../../detalle/ProductMiniCard';
import {View, StyleSheet} from 'react-native';
import {ProductItem} from '../../comun/ProductItem';

export const ResultList = ({results, addToCart}) => {
  return (
    <View style={styles.viewP}>
      {
        results.map(
          (item, index) =>{
              let cartItem = {
                  product: item,
                  amount: 1
              };
              return <ProductItem key = {index} {...item} addToCart={addToCart} item={cartItem} />
          }
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  viewP: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around'
  }
});
