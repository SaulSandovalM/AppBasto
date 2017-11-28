import React from 'react';
import {Card, Icon, Text} from 'native-base';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

export const ProductItem = ({image}) => {
  return (
      <TouchableOpacity>
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
  view: {
    flex: 1
  },
  view2: {
    flexDirection: 'row'
  },
  view3: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  view4: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  view5: {
    flexDirection: 'row'
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
  text: {
    alignSelf: 'center'
  },
  scroll: {
    marginBottom: 10
  },
  img: {
    height: 150,
    width: 150,
    flex: 1
  },
  img2: {
    width: '100%',
    height: 150
  },
  button: {
    alignSelf: 'center',
    borderColor: 'white'
  },
  icon: {
    color: "green"
  },
  precio: {
    width: 120,
    marginTop: 5
  }
});
