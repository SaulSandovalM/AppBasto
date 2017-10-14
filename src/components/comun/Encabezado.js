import React from 'react';
import {Text, View} from 'react-native';
import {Icon, Left, Right, Header} from 'native-base';

const Encabezado = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <Header rounded style={styles.header}>
      <Left>
        <Icon name="menu" onPress={props.toggle}/>
      </Left>
      <Text style={{alignSelf: 'center'}}>{props.headerText}</Text>
      <Right>
        <Icon name="cart"/>
      </Right>
    </Header>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  iconStyle: {
    alignSelf: 'flex-end'
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  },
  header: {
    backgroundColor: 'white'
  }
};

export {Encabezado};
