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

    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Card style={{borderColor:'green', borderWidth:3}}>
              <CardItem style={{borderColor:'green', borderWidth:1}}>
                <Left style={{justifyContent:'space-between'}}>
                    <Text>Jitomate</Text>
                    <Text note>$50.00</Text>
                </Left>
              </CardItem>
                <Image source={img} style={styles.img}/>
                  <Button bordered iconRight
                          style={{alignSelf:'stretch', borderColor:'green'}}
                          onPress={()=>alert('Agregado!')}
                  >
                    <Text >Agregar al Carrito</Text>
                    <Icon name="cart" style={{color: "green"}}/>
                  </Button>
            </Card>

            <Card style={{borderColor:'green', borderWidth:3}}>
              <CardItem style={{borderColor:'green', borderWidth:1}}>
                <Left style={{justifyContent:'space-between'}}>
                  <Text>Jitomate</Text>
                  <Text note>$50.00</Text>
                </Left>
              </CardItem>
              <Image source={img} style={styles.img}/>
              <Button bordered iconRight
                      style={{alignSelf:'stretch', borderColor:'green'}}
                      onPress={()=>alert('Agregado!')}
              >
                <Text >Agregar al Carrito</Text>
                <Icon name="cart" style={{color: "green"}}/>
              </Button>
            </Card>
    </View>

    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
      <Card style={{borderColor:'green', borderWidth:3}}>
        <CardItem style={{borderColor:'green', borderWidth:1}}>
          <Left style={{justifyContent:'space-between'}}>
            <Text>Jitomate</Text>
            <Text note>$50.00</Text>
          </Left>
        </CardItem>
        <Image source={img} style={styles.img}/>
        <Button bordered iconRight
                style={{alignSelf:'stretch', borderColor:'green'}}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
        </Button>
      </Card>

      <Card style={{borderColor:'green', borderWidth:3}}>
        <CardItem style={{borderColor:'green', borderWidth:1}}>
          <Left style={{justifyContent:'space-between'}}>
            <Text>Jitomate</Text>
            <Text note>$50.00</Text>
          </Left>
        </CardItem>
        <Image source={img} style={styles.img}/>
        <Button bordered iconRight
                style={{alignSelf:'stretch', borderColor:'green'}}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
        </Button>
      </Card>
    </View>

    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
      <Card style={{borderColor:'green', borderWidth:3}}>
        <CardItem style={{borderColor:'green', borderWidth:1}}>
          <Left style={{justifyContent:'space-between'}}>
            <Text>Jitomate</Text>
            <Text note>$50.00</Text>
          </Left>
        </CardItem>
        <Image source={img} style={styles.img}/>
        <Button bordered iconRight
                style={{alignSelf:'stretch', borderColor:'green'}}
                onPress={()=>alert('Agregado!')}
        >
          <Text >Agregar al Carrito</Text>
          <Icon name="cart" style={{color: "green"}}/>
        </Button>
      </Card>

      <Card style={{borderColor:'green', borderWidth:3}}>
        <CardItem style={{borderColor:'green', borderWidth:1}}>
          <Left style={{justifyContent:'space-between'}}>
            <Text>Jitomate</Text>
            <Text note>$50.00</Text>
          </Left>
        </CardItem>
        <Image source={img} style={styles.img}/>
        <Button bordered iconRight
                style={{alignSelf:'stretch', borderColor:'green'}}
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
