import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import img from '../../assets/imgs/usuario.jpg';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class Menu extends Component < {} > {
  render() {
    return (
      <View style={styles.menu}>
        <ScrollView style={styles.content}>
          <List>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
                <Text style={{color: '#000' }}>Categoria 1</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 2</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 3</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 4</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 5</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 6</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 7</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 8</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 9</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-cart" style={{color: '#1CAF57' }}/>
              </Left>
              <Body>
              <Text style={{color: '#000' }}>Categoria 10</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Icon name="arrow-forward" style={{color: '#1CAF57' }} />
                </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
        </ScrollView>

        <View style={styles.container}>
          <View>
            <TouchableOpacity style={styles.usuarioImagen} onPress={() => Actions.Perfil()}>
              <Image style={styles.usuario} source={img}/>
              <Text style={styles.text}>Saul Sandoval</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 50,
    borderColor: '#000'
  },
  usuario: {
    width: 60,
    height: 60,
    margin: 20,
    marginTop: 30
  },
  usuarioImagen: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  texto: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'red',
    margin: 5
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  content: {
    width: width / 2 + 59
  },
  icon: {
    marginRight: 10,
    marginLeft: 15
  }
});
