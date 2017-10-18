import React, {Component} from 'react';
import {Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Buscador from '../comun/Buscador';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Icon, Button} from 'native-base';
import cat1 from '../../assets/imgs/cat1.jpg';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

export default class Principal extends Component < {} > {
  state = {
    modalVisible: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  actualizar(isOpen) {
    this.setState({isOpen})
  }

  _renderModalContent = () => (
    <View style={styles.view3}>
      <View style={styles.view}>
        <Card>
          <Image source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg'
          }} style={styles.img2}/>
        </Card>
      </View>

      <Text style={styles.text}>Jitomate</Text>
      <Button bordered iconRight style={styles.button} onPress={() => alert('Agregado!')}>
        <Text>Agregar</Text>
        <Icon name="cart" style={styles.icon}/>
      </Button>
    </View>
  );

  render() {
    return (
      <StyleProvider style={getTheme(material)}>

        <SideMenu menu={< Menu />} isOpen={this.state.isOpen} onChange={(isOpen) => this.actualizar(isOpen)}>
          <View style={styles.view}>
            <Buscador toggle={this.toggle}/>

            <ScrollView style={styles.content}>
              <StatusBar hidden={true}/>
              <ImageBackground source={cat1} style={styles.fondo}>
                <View style={styles.view4}>
                  <Text onPress={() => Actions.Detalle()} style={styles.texto}>
                    FRUTAS Y VERDURAS
                  </Text>
                </View>
              </ImageBackground>

              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>
                  <TouchableOpacity onPress={() => this.setState({visibleModal: 1})}>
                    <Card>
                      <Image source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.agroindustriasmora.com/images/productos/papa.png'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://jalapeno.cz/wp-content/uploads/2015/02/SHU-stupnice-palivosti-chilli.jpg'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <ImageBackground source={cat1} style={styles.fondo}>
                <View style={styles.view4}>
                  <Text style={styles.texto}>
                    HIGIENE
                  </Text>
                </View>

              </ImageBackground>
              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://super.walmart.com.mx/images/product-images/img_large/00750102540304L.jpg'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.colgatecommercial.com/App_Themes/ColgateStyle/Images/products/53096-lrg.png'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://pedidos.com/myfotos/xLarge/(X)CLX-CLORO-930ML.jpg'
                      }} style={styles.img}/>
                    <View style={styles.view5}>
                        <Icon name="ios-star-outline" style={styles.icon}/>
                      </View>
                    </Card>
                  </TouchableOpacity>

                </ScrollView>
              </View>

              <ImageBackground source={cat1} style={styles.fondo}>
                <View style={styles.view4}>
                  <Text style={styles.texto}>
                    CATEGORIA 3
                  </Text>
                </View>
              </ImageBackground>

              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.lamoderna.com.mx/templates/LaModerna/images/categories/pastas/pastas-la-moderna-mobile.png'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://i5.walmartimages.com/asr/4f552695-250f-4778-a1bf-b6aaa2f13728_1.135100d3d2562bc4adb81e96ddd88de6.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.chedraui.com.mx/media/catalog/product/cache/10/image/950x950/9df78eab33525d08d6e5fb8d27136e95/7/5/750103912014_00.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                </ScrollView>
              </View>

              <ImageBackground source={cat1} style={styles.fondo}>
                <View style={styles.view4}>
                  <Text style={styles.texto}>
                    CATEGORIA 4
                  </Text>
                </View>
              </ImageBackground>
              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.colgate.com.mx/CP15/es/mx/oc/products/toothpaste/images/total-clean-mint.png'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://target.scene7.com/is/image/Target/14413690?wid=520&hei=520&fmt=pjpeg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://images-na.ssl-images-amazon.com/images/I/51BxpJHnDJL._SX355_.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                </ScrollView>
              </View>
              <Modal isVisible={this.state.visibleModal === 1} onBackdropPress={() => this.setState({visibleModal: null})} animationIn={'slideInLeft'} animationOut={'fadeOut'}>
                {this._renderModalContent()}
              </Modal>

            </ScrollView>

          </View>
        </SideMenu>
      </StyleProvider>
    );
  }
}

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
    flexDirection: 'row',
    justifyContent: 'flex-end'
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
  }
});
