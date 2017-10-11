import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Buttonn = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
  return(
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
    buttonStyle: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 57,
      paddingTop: 6,
      paddingBottom: 6,
      backgroundColor: '#4DA49B',
      borderColor: '#3F51B5',
      height: 45,
      flexDirection: 'row',
      elevation: 2,
      alignItems: 'center',
      marginRight: 40,
      marginLeft: 40,
      marginBottom: 10,
      top: 5
    },
    textStyle: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: '600',

    }
};

export {Buttonn}
