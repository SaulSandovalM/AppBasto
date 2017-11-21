import React from 'react';
import {View} from 'react-native';

const CardSectionn = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export {CardSectionn};
