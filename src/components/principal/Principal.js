import React, {Component} from 'react';
import {Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Buscador from '../comun/Buscador';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Icon, Button} from 'native-base';
import cat1 from '../../assets/imgs/cat1.jpg';
import lacteos from '../../assets/imgs/lacteos.jpg';
import carnes from '../../assets/imgs/carnes.jpg';
import pan from '../../assets/imgs/pan.jpg';
import jugos from '../../assets/imgs/jugos.jpg';
import vinos from '../../assets/imgs/vinos.jpg';
import farm from '../../assets/imgs/farm.jpg';
import higiene from '../../assets/imgs/higiene.jpg';
import bb from '../../assets/imgs/bb.jpeg';
import conge from '../../assets/imgs/conge.jpg';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import CategoryList from './listado/CategoryList';
import {ResultList} from './listado/ResultList';
//redux
import {connect} from 'react-redux';
import {setSearch} from '../../actions/filterActions';

class Principal extends Component < {} > {
  state = {
    modalVisible: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
        results:[]
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

  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.allProducts;
    const rEx = new RegExp(value,'i');
    results = results.filter(p=>rEx.test(p.name) || rEx.test(p.description) || rEx.test(p.category));
      this.setState({results})
  };

  render() {
    const {search} = this.props;
    const {results} = this.state;
    return (
      <StyleProvider style={getTheme(material)}>

        <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.actualizar(isOpen)}>
          <View style={styles.view}>

            <Buscador
                onSearch={this.onSearch}
                toggle={this.toggle}/>

            <StatusBar hidden={true}/>
            <ScrollView style={styles.content}>


                {!search ? <View>
              <CategoryList
                  fondo={lacteos}
                  categoria="Despensa" />
              <CategoryList
                  fondo={carnes}
                  categoria="Carnes" />
              <CategoryList
                  fondo={pan}
                  categoria="Panaderia" />
              <CategoryList
                  fondo={jugos}
                  categoria="Bebidas" />
            </View>:
                    <ResultList
                      results={results}
                    />
                }




              <Modal
                    isVisible={this.state.visibleModal === 1}
                    onBackdropPress={() => this.setState({visibleModal: null})}
                    animationIn={'slideInLeft'}
                    animationOut={'fadeOut'}>
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

function mapStateToProps(state){
  return {
      search:state.filter.search,
      allProducts:state.products.allProducts,
  }
}


export default Principal = connect(mapStateToProps, {setSearch})(Principal);