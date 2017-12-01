import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Container, Button, H1} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/img4.jpg';

export default class Pedido extends Component <{}> {
  render() {
    return (
      <Container>
        <ImageBackground source={img} style={styles.img}>
          <View style={styles.view}>
            <View style={styles.view2}>
              <H1 style={styles.trans}>Tu pedido va en camino</H1>
              <Button block style={styles.buton} onPress={() => Actions.Principal()}>
                <Text style={styles.botonT}>Aceptar</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buton: {
    backgroundColor: '#8e1c58',
    width: 150,
    alignSelf: 'center'
  },
  botonT: {
    color: 'white'
  },
  img: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    height: '100%'
  },
  view2: {
    height: 200
  },
  trans: {
    backgroundColor: 'transparent'
  }
});
