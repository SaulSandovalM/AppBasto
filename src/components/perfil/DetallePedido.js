import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {Container, Content, Title, List, ListItem, Body, Right, Thumbnail, Left} from 'native-base';
import Cabecera from '../comun/Cabecera';

const header = Platform.select({
  ios: <Cabecera/>,
});

export default class Perfil extends Component {
  render() {
      console.log(this.props.listaO);
      const {listaO} = this.props;
      let nlistaO = listaO.products

    return (
      <Container style={styles.container}>
        {header}
        <Content>

          <Title style={styles.color}>Detalle del pedido</Title>

          <List>
            <ListItem>
              <Body>
              <Text>{listaO.date}</Text>
              <Text note>Fecha</Text>
              </Body>
              <Right>
                <Text>$ {listaO.total}</Text>
                <Text note style={styles.color2}>Recibido</Text>
              </Right>
            </ListItem>
          </List>

            {
              nlistaO.map((l,index) => {
                return (
                  <List key={index}>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail source={{uri: l.product.image}} />
                      </Left>
                      <Body>
                      <Text>{l.product.name}</Text>
                      <Text note>{l.product.presentation}</Text>
                      </Body>
                      <Right>
                        <Text note>$ {l.product.price}</Text>
                      </Right>
                    </ListItem>
                  </List>
                )
              })
            }

          <Text style={styles.repar}>Tu repartidor fue Saul</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  color: {
    color: 'black',
    marginTop: 20
  },
  repar: {
    fontSize: 16,
    color: 'black',
    margin: 15
  },
  color2: {
    color: 'green'
  }
});
