import React, {Component} from 'react';
import {View, Image, ScrollView, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Card, CardItem, Left, Right, Button, Icon, Container, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/bienvenida.jpg';
import Cabecera from "../comun/Cabecera";

export default class Detalle extends Component < {} > {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Cabecera/>

  <ScrollView >

    <View style={styles.viewP}>
            <Card style={styles.estiloCard}>
              <CardItem style={styles.estiloCardI}>
                <Left style={styles.cardL}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                </Left>
              </CardItem>
                <Image source={img} style={styles.img}/>
                  <Button bordered iconRight
                          style={styles.btn}
                          onPress={()=>alert('Agregado!')}
                  >
                    <Text >Agregar al Carrito</Text>
                    <Icon name="cart" style={{color: "green"}}/>
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
        <Button bordered iconRight
                style={styles.btn}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
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
        <Button bordered iconRight
                style={styles.btn}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
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
        <Button bordered iconRight
                style={styles.btn}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
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
        <Button bordered iconRight
                style={styles.btn}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
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
        <Button bordered iconRight
                style={styles.btn}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
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
    viewP:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    estiloCard:{
        borderColor:'green',
        borderWidth:3,
    },
    estiloCardI:{
        borderColor:'green',
        borderWidth:1
    },
    cardL:{
        justifyContent:'space-between'
    },
    btn:{
        alignSelf:'stretch',
        borderColor:'green'
    },







  view: {
    flexDirection: 'row'
  },
  img: {
    height: 100,
    width: null,
    flex: 1,
      borderColor:'green', borderWidth:1
  }
});
