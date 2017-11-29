import React from 'react';
import {Card, Icon, Text} from 'native-base';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

export const ProductItem = ({image, name}) => {
  return (
      <TouchableOpacity >
      <Card>
        <Image source={{
            uri: image
          }} style={styles.img}/>
        <View style={styles.view5}>
          <Text style={styles.precio}>$50.00</Text>
          <Icon name="ios-star-outline" style={styles.icon}/>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view5: {
    flexDirection: 'row'
  },
  img: {
    height: 150,
    width: 150,
    flex: 1
  },
  icon: {
    color: "green"
  },
  precio: {
    width: 120,
    marginTop: 5
  }
});
