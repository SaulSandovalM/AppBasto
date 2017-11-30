import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, Platform} from 'react-native';
import {Card, CardItem, Left, Button, Icon, Container, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import img from '../../assets/imgs/despensa.png';
import Buscador from '../comun/Buscador';
import SideMenu from 'react-native-side-menu';
import Menu from '../principal/Menu';
import {connect} from 'react-redux';
import {setSearch} from '../../actions/filterActions';

class Detalle extends Component <{}> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      results: [],
      showToast: false
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

  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.allProducts;
    const rEx = new RegExp(value, 'i');
    results = results.filter(p => rEx.test(p.name) || rEx.test(p.description) || rEx.test(p.category));
    this.setState({results})
  };

  render() {
    const {search} = this.props;
    const {results} = this.state;

    return (
      <StyleProvider style={getTheme(material)}>
        <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.actualizar(isOpen)}>
        <Container>
          <Buscador onSearch={this.onSearch} toggle={this.toggle}/>

          <ScrollView style={{backgroundColor: 'white'}}>
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
        </SideMenu>
      </StyleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {search: state.filter.search, allProducts: state.products.allProducts}
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

export default Detalle = connect(mapStateToProps, {setSearch})(Detalle);
