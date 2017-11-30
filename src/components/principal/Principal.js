import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import Buscador from '../comun/Buscador';
import {Card, Icon, Button} from 'native-base';
import lacteos from '../../assets/imgs/lacteos.jpg';
import carnes from '../../assets/imgs/carnes.jpg';
import pan from '../../assets/imgs/pan.jpg';
import jugos from '../../assets/imgs/jugos.jpg';
import vinos from '../../assets/imgs/vinos.jpg';
import farm from '../../assets/imgs/farm.jpg';
import higiene from '../../assets/imgs/higiene.jpg';
import bb from '../../assets/imgs/bb.jpeg';
import cat1 from '../../assets/imgs/cat1.jpg';
import conge from '../../assets/imgs/conge.jpg';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleProvider, Spinner} from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import CategoryList from './listado/CategoryList';
import {ResultList} from './listado/ResultList';
//redux
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/productosActions';
import {setSearch} from "../../actions/filterActions";
import _ from 'lodash';

class Principal extends Component < {} > {
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
            <ScrollView style={styles.content}>
                {
                    !search
                        ?
                        <View>
                            <CategoryList fondo={lacteos} categoria="Abarrotes" slug="abarrotes"/>
                            <CategoryList fondo={cat1} categoria="Cremería" slug="cremeria"/>
                            <CategoryList fondo={carnes} categoria="Desechables" slug="desechables"/>
                            <CategoryList fondo={pan} categoria="Frutos Secos y Semillas" slug="frutos-secos-y-semillas"/>
                            <CategoryList fondo={jugos} categoria="Frutas y Verduras" slug="frutas-y-verduras"/>
                            <CategoryList fondo={vinos} categoria="Productos de Limpieza" slug="productos-de-limpieza"/>
                            <CategoryList fondo={higiene} categoria="Materias Primas" slug="materias-primas"/>
                            <CategoryList fondo={farm} categoria="jugos"slug="jugos"/>
                        </View>
                        :
                        <ResultList results={results}/>
                }
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
    content: {
    backgroundColor: '#fff'
  },

});

const mapStateToProps = state => {
    const lista = _.map(state.lista, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return {search: state.filter.search, lista};


};


export default Principal = connect(mapStateToProps, {listaFetch, setSearch})(Principal);
