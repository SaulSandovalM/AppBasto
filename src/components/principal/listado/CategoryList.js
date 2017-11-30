import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text, ImageBackground, ScrollView} from 'react-native';
import {Spinner} from 'native-base';
import {ProductItem} from './ProductItem';
import {Actions} from 'react-native-router-flux';

class CategoryList extends Component {
  state = {
    allProducts: []
  };

  componentWillMount() {
    const {allProducts} = this.props;
    this.setState({allProducts});
  }

  setVisible = (id) => {
    this.setState({visibleModal: id});
  };

  render() {
    if (!this.props.fetched)
      return <Spinner/>;
    const {allProducts} = this.state;
    const {fondo, categoria} = this.props;

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
            {
              allProducts.map((p, index) => {
                return <ProductItem setVisible={this.setVisible} key={index} index={index} {...p}/>
              })
            }
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    allProducts: state.products.allProducts,
    fetched: state.products.allProducts.length > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(dispatch)};
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
  }
});

export default CategoryList = connect(mapStateToProps, mapDispatchToProps)(CategoryList);
