import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, Platform} from 'react-native';
import {Card, CardItem, Left, Button, Icon, Container, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/despensa.png';
import Cabecera from '../comun/Cabecera';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Detalle extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          {header}

          <ScrollView>
            <View style={styles.viewP}>
              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

            </View>

            <View style={styles.viewP}>
              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

            </View>

            <View style={styles.viewP}>
              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

              <Card style={styles.estiloCard}>
                <CardItem style={styles.estiloCardI}>
                  <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                  </Left>
                </CardItem>
                <Image source={img} style={styles.img}/>
                <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                  <Text >Agregar al Carrito</Text>
                  <Icon name="cart" style={styles.icon}/>
                </Button>
              </Card>

            </View>
          </ScrollView>

        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  viewP: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  estiloCard: {
    borderColor: '#8e1c58',
    borderWidth: 3
  },
  estiloCardI: {
    borderColor: '#8e1c58',
    borderWidth: 1
  },
  cardL: {
    justifyContent: 'space-between'
  },
  btn: {
    alignSelf: 'stretch',
    borderColor: '#8e1c58'
  },
  view: {
    flexDirection: 'row'
  },
  img: {
    height: 100,
    width: null,
    flex: 1,
    borderColor: '#8e1c58',
    borderWidth: 1
  },
  icon: {
    color: "#8e1c58"
  }
});
