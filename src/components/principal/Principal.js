import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Buscador from '../comun/Buscador';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {Card, Icon, Button} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import SideMenu from 'react-native-side-menu';
import {Menu} from './Menu';
import CategoryList from './listado/CategoryList';
import {ResultList} from './listado/ResultList';
import firebase from '../../components/firebase/Firebase'
//redux
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/productosActions';
import {setSearch} from '../../actions/filterActions';
import {addToCart} from '../../actions/cartActions';
import _ from 'lodash';

class Principal extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      results: [],
      loggedIn: null,
      user: ''
    };
  }

  salir = () => {
    firebase.auth().signOut();
  };

  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.listaP;
    const rEx = new RegExp(value, 'i');
    results = results.filter(p => rEx.test(p.name));
    this.setState({results});
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  actualizar(isOpen) {
    this.setState({isOpen})
  }

  componentWillMount() {
    this.props.listaFetch();
    console.log(this.state);

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.setState({user: user})
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  render() {
    const {search, lista, listaP, addToCart, cart, listaO} = this.props;
    console.log(cart.length)
    let nlista = lista.sort((a, b) => {
      return a.name > b.name
    })
    const {results} = this.state;
    console.log(this.props.lista);

    return (
      <StyleProvider style={getTheme(material)}>
        <SideMenu menu={<Menu lista = {lista} user = {this.state.user} listaP = {listaP} addToCart = {addToCart}
          loggedIn = {this.state.loggedIn} salir = {this.salir} listaO = {listaO} />}
          isOpen={this.state.isOpen} onChange={(isOpen) => this.actualizar(isOpen)} listaO={listaO}>

          <View style={styles.view}>

            <Buscador onSearch={this.onSearch} toggle={this.toggle} cart={cart.length}/>

            <StatusBar hidden={true}/>
            <ScrollView style={styles.content}>

              {
                !search
                  ? nlista.map((category, index) => {
                    return <CategoryList
                            key={index} fondo={category.image} categoria={category.name} slug={category.slug}/>
                  })
                  : <ResultList results={results} addToCart={addToCart}/>
              }

            </ScrollView>
          </View>
        </SideMenu>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  const lista = _.map(state.lista.categories, (val, uid) => {
    return {
      ...val,
      uid
    };
  });

  const listaP = _.map(state.lista.products, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  const listaO = _.map(state.lista.orders, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  console.log(listaO)
  return {search: state.filter.search, lista, listaP, cart: state.cart, listaO};
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  content: {
    backgroundColor: '#fff'
  },
  fondo: {
    justifyContent: 'center',
    height: 50,
    width: null
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
  button: {
    alignSelf: 'center',
    borderColor: 'white'
  },
  icon: {
    color: 'green'
  }
});

export default Principal = connect(mapStateToProps, {listaFetch, setSearch, addToCart})(Principal);
