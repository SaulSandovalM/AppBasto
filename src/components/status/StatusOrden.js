import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Container, Content} from 'native-base';
import MapView from 'react-native-maps';

export default class StatusOrder extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      region:{
        latitude: 21.0242225,
        longitude: 105.8207913,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }
  }
  render() {
    return (
      <View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
