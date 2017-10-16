import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container, StyleProvider, Right, Thumbnail, Body, List, ListItem, Button, Card, CardItem, Form, Item, Picker} from 'native-base';
import Cabecera from '../comun/Cabecera';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/bienvenida.jpg';

export default class Detalle extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Cabecera/>
          <ScrollView>
            <List style={styles.list}>
              <ListItem>
                <Body>
                  <Text style={styles.text1}>Imagen</Text>
                </Body>
                <Body>
                  <Text style={styles.text1}>Nombre</Text>
                </Body>
                <Body>
                  <Text style={styles.text1}>Precio U</Text>
                </Body>
                <Body>
                  <Text style={styles.text1}>Cantidad</Text>
                </Body>
                <Body>
                  <Text style={styles.text1}>Total</Text>
                </Body>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Form>
                    <Picker
                      mode="dropdown"
                      placeholder="1kg"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange2.bind(this)}>
                      <Item label="2 kg" value="key0" />
                      <Item label="3 kg" value="key1" />
                      <Item label="4 kg" value="key2" />
                      <Item label="5 kg" value="key3" />
                      <Item label="6 kg" value="key4" />
                    </Picker>
          </Form>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Thumbnail square size={80} source={img}/>
                <Body>
                  <Text>Manzanas</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
                <Body>
                  <Text>1kg</Text>
                </Body>
                <Body>
                  <Text>$25.00</Text>
                </Body>
              </ListItem>
            </List>
          </ScrollView>

          <Card>
            <CardItem style={styles.cardItem}>
              <Text>Total a Pagar</Text>
              <Text style={styles.pago}>$500.00 MXN</Text>
            </CardItem>
          </Card>

          <Button block style={styles.boton}>
            <Text style={styles.text}>Pagar</Text>
          </Button>

        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    color: 'white'
  },
  boton: {
    backgroundColor: 'yellow',
    width: '100%'
  },
  list: {
    backgroundColor: 'black'
  },
  cardItem: {
    alignSelf: 'center',
    flexDirection: 'column'
  },
  pago: {

  }
});
