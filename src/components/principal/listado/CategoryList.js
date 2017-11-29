import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, ScrollView} from 'react-native';
import {Icon, Spinner} from 'native-base';
import {ProductItem} from './ProductItem';
import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {listaFetch} from '../../../actions/productosActions';
import _ from 'lodash';


class CategoryList extends Component {
    componentWillMount() {
        this.props.listaFetch();
        console.log(this.props.lista)
    }
    spinnerr(){
        if (!this.props.fetched)
            return <Spinner/>;
    }

  render() {
    const {fondo, categoria, lista, slug} = this.props;
    let filtrados = lista.filter(f=>{return f.category===slug && f.in_offer===true});

    return (
        <ScrollView style={styles.content}>
        <ImageBackground source={fondo} style={styles.fondo}>
          <View style={styles.view4}>
            <Text onPress={() => Actions.Detalle()} style={styles.texto}>
              {categoria}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.view2}>
          <ScrollView horizontal={true} style={styles.scroll}>

              {this.spinnerr()}

              {
                  filtrados.map((item, index) => {
                          return <ProductItem key={index} index={index} {...item}/>

                  })
              }

          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view2: {
    flexDirection: 'row'
  },
  view4: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
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
  scroll: {
    marginBottom: 10
  },

});

const mapStateToProps = state => {
    const lista = _.map(state.lista, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return {lista, fetched: lista.length > 0};
};


export default CategoryList = connect(mapStateToProps, {listaFetch})(CategoryList);
