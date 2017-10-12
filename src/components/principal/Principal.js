import React, {Component} from 'react';
import {Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Buscador from '../comun/Buscador';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {CardSection, Card, Header,CardSectionn} from '../comun';
import cat1 from '../../assets/imgs/cat1.jpg'
import cat2 from '../../assets/imgs/cat2.jpg'
import cat3 from '../../assets/imgs/cat3.jpg'
import cat4 from '../../assets/imgs/cat4.jpg'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

export default class Principal extends Component < {} > {
    state = {
        modalVisible: null,
    };
  constructor(props){
  	super(props);
  	this.state = {
      isOpen: false
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  actualizar(isOpen){
    this.setState({
      isOpen
    })
  }

    _renderModalContent = () => (
        <View style={{width:200, alignSelf:'center'}}>

          <CardSectionn >

            <Image source={{
                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
            }} style={{
                height: 200,
                width: 200,
                flex: 1
            }}/>
          </CardSectionn>

          <CardSectionn >
            <Text>Jitomate</Text>
          </CardSectionn>
          <CardSectionn >
            <Text style={{marginRight:40, marginLeft:60}}>$20.00 Kg</Text>
            <Icon name="cart" style={{color: "green"}}/>
          </CardSectionn>


        </View>


    );

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <SideMenu
          menu={<Menu/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.actualizar(isOpen)}>
          <View style={styles.view}>
            <Buscador toggle={this.toggle.bind(this)}/>

            <ScrollView style={styles.content}>
              <ImageBackground source={cat1} style={styles.fondo}>
                <Text onPress={() => Actions.Detalle()} style={styles.texto}>
                  CATEGORIA 1
                </Text>
              </ImageBackground>

              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>
                  <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })}>
                    <Card>
                      <Image source={{
                        uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://blogesp.diabetv.com/wp-content/uploads/2015/04/papa.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://cdn.masdemx.com/wp-content/uploads/2016/08/chiles-mas-picantes-mexico.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <ImageBackground source={cat1} style={styles.fondo}>
                <Text style={styles.texto}>
                  CATEGORIA 2
                </Text>

              </ImageBackground>
              <View style={styles.view2}>
                <ScrollView horizontal={true} style={styles.scroll}>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://super.walmart.com.mx/images/product-images/img_large/00750102540304L.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'http://www.colgatecommercial.com/App_Themes/ColgateStyle/Images/products/53096-lrg.png'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <Image source={{
                        uri: 'https://pedidos.com/myfotos/xLarge/(X)CLX-CLORO-930ML.jpg'
                      }} style={styles.img}/>
                    </Card>
                  </TouchableOpacity>

                </ScrollView>
              </View>

              <ImageBackground source={cat1} style={styles.fondo}>
                <Text style={styles.texto}>
                  CATEGORIA 3
                </Text>
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
                <Text style={styles.texto}>
                  CATEGORIA 4
                </Text>
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
              <Modal
                  isVisible={this.state.visibleModal === 1}
                  onBackdropPress={() => this.setState({ visibleModal: null })}
              >
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
  content: {
    backgroundColor: 'white'
  },
  fondo: {
    justifyContent: 'flex-end',
    padding: 15,
    height: null,
    width: null,
    opacity: 15
  },
  texto: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  scroll: {
    marginBottom: 10
  },
  img: {
    height: 200,
    width: 200,
    flex: 1
  }
});
