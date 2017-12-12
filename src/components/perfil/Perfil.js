import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Platform} from 'react-native';
import {Container, Content, SwipeRow, Icon, Button, Thumbnail, H1, List, ListItem, Body, Right} from 'native-base';
import img2 from '../../assets/imgs/nouser.png';
import Cabecera from '../comun/Cabecera';
import img from '../../assets/imgs/bienvenida.jpg';
import {Actions} from 'react-native-router-flux';

const header = Platform.select({
  ios: <Cabecera/>,
});

export const Perfil =({listaO, user})=>{
  console.log(listaO)
  console.log(user)
  let filtrados = listaO.filter(f=>{return f.user===user.email});
    return (
      <Container style={styles.container}>
        {header}
        <Content>

          <ImageBackground source={img} style={styles.img}>
            <View style={styles.view4}>
              <ListItem avatar style={{backgroundColor: 'transparent'}}>
                <Thumbnail source={img2}/>
              </ListItem>
              <H1 style={styles.h1}>{user.email}</H1>
              <Text style={styles.text}>{user.email}</Text>
            </View>
          </ImageBackground>

          <View>
            <Text style={styles.orden}>Historial de Ordenes</Text>
          </View>

            {
              filtrados.length > 0
                ?
                filtrados.map((listaO,index) => {
                  let date=new Date(listaO.date)
                  let nDate = date.toDateString();
                  console.log(date.toDateString())
                    return (
                      <List key={index}>
                        <ListItem onPress={()=> Actions.DetallePedido({listaO})}>
                          <Body>
                          <Text>{nDate}</Text>
                          <Text note>Fecha</Text>
                          </Body>
                          <Right>
                            <Text>$ {listaO.total}</Text>
                            <Text note style={styles.color2}>Recibido</Text>
                          </Right>
                        </ListItem>
                      </List>
                    )
                  })
              : <Text>Crea tu primera orden!</Text>
            }
        </Content>
      </Container>
    );
  }

const styles = StyleSheet.create({
  view4: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignSelf:'center',
    alignItems:'center'
  },
  thub: {
    margin: 10,
    height: 80,
    width: 80
  },
  h1: {
    marginLeft: 20,
    color: 'white'
  },
  text: {
    marginLeft: 20,
    color: 'white'
  },
  img: {
    flex: 2,
    height: 200,
    width: null,
    opacity: 15
  },
  view: {
    alignSelf: 'center'
  },
  orden: {
    alignSelf: 'center',
    margin: 20,
    fontSize: 20,
    color: 'black'
  },
  container: {
    backgroundColor: 'white'
  },
  color2: {
    color:'green'
  }
});
