import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Buscador from '../comun/Buscador';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {Card, Icon, Button} from 'native-base';
import lacteos from '../../assets/imgs/lacteos.jpg';
import carnes from '../../assets/imgs/carnes.jpg';
import pan from '../../assets/imgs/pan.jpg';
import jugos from '../../assets/imgs/jugos.jpg';
import vinos from '../../assets/imgs/vinos.jpg';
import higiene from '../../assets/imgs/higiene.jpg';
import cat1 from '../../assets/imgs/cat1.jpg';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import CategoryList from './listado/CategoryList';
import {ResultList} from './listado/ResultList';
//redux
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/productosActions';
import {setSearch} from "../../actions/filterActions";
import _ from 'lodash';

class Principal extends Component <{}> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      results: [],
    };
  }

  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.lista;
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
    console.log(this.props.lista)
  }

  render() {
    const {search} = this.props;
    const {results} = this.state;
    return (
      <StyleProvider style={getTheme(material)}>
        <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.actualizar(isOpen)}>
          <View style={styles.view}>

            <Buscador onSearch={this.onSearch} toggle={this.toggle}/>

            <StatusBar hidden={true}/>
            <ScrollView style={styles.content}>

              {
                !search
                  ? <View>
                      <CategoryList fondo={carnes} categoria="Abarrotes" slug="abarrotes"/>
                      <CategoryList fondo={vinos} categoria="Cremeria" slug="cremeria"/>
                      <CategoryList fondo={jugos} categoria="Desechables" slug="desechables"/>
                      <CategoryList fondo={lacteos} categoria="Frutos Secos y Semillas" slug="frutos-secos-y-semillas"/>
                      <CategoryList fondo={cat1} categoria="Frutas y Verduras" slug="frutas-y-verduras"/>
                      <CategoryList fondo={higiene} categoria="Productos de Limpieza" slug="productos-de-limpieza"/>
                      <CategoryList fondo={pan} categoria="Materias Primas" slug="materias-primas"/>
                    </View>
                  : <ResultList results={results}/>
              }

            </ScrollView>
          </View>
        </SideMenu>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  const lista = _.map(state.lista, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  return {search: state.filter.search, lista};
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

export default Principal = connect(mapStateToProps, {listaFetch, setSearch})(Principal);
