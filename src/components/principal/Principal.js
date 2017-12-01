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
    const {search, lista} = this.props;
    let nlista = lista.sort((a,b)=>{return a.name > b.name})
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
                  ? nlista.map((category, index) => {
                        return <CategoryList key={index} fondo={category.image} categoria={category.name} slug={category.slug}/>
                    })
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
    console.log(state)
  const lista = _.map(state.lista.categories, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  console.log(lista)
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
