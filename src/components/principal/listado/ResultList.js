import React from 'react';
import {ProductMiniCard} from '../../detalle/ProductMiniCard';
import {View, StyleSheet} from 'react-native';

export const ResultList = ({results}) => {
  return (
    <View style={styles.viewP}>
      {
        results.map(
          (p, index) => <ProductMiniCard key = {
            index
          } {
            ...p
          } />
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  viewP: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
