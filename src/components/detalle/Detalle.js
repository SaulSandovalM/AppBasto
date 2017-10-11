import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Button, Card, CardItem} from 'native-base';
import {Header} from "../comun/Header";

export default class Detalle extends Component < {} > {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'CATEGORIA 1'}/>

        <View>

          <View style={{flexDirection: 'row'}}>
            <Card style={{height:150}}>

              <Image source={{
                  uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
              }} style={{
                  height: 200,
                  width: 200,
                  flex: 1
              }}/>

            </Card>

            <Card style={{height:150}}>

              <Image source={{
                  uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
              }} style={{
                  height: 200,
                  width: 200,
                  flex: 1
              }}/>

            </Card>

            <Card style={{height:150}}>

              <Image source={{
                  uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
              }} style={{
                  height: 200,
                  width: 200,
                  flex: 1
              }}/>

            </Card>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Card style={{height:150}}>

            <Image source={{
                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
            }} style={{
                height: 200,
                width: 200,
                flex: 1
            }}/>

          </Card>
          <Card style={{height:150}}>

            <Image source={{
                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
            }} style={{
                height: 200,
                width: 200,
                flex: 1
            }}/>

          </Card>
          <Card style={{height:150}}>

            <Image source={{
                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
            }} style={{
                height: 200,
                width: 200,
                flex: 1
            }}/>

          </Card>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Card style={{height:150}}>

          <Image source={{
              uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
          }} style={{
              height: 200,
              width: 200,
              flex: 1
          }}/>

        </Card>
        <Card style={{height:150}}>

          <Image source={{
              uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
          }} style={{
              height: 200,
              width: 200,
              flex: 1
          }}/>

        </Card>
        <Card style={{height:150}}>

          <Image source={{
              uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
          }} style={{
              height: 200,
              width: 200,
              flex: 1
          }}/>

        </Card>
    </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
