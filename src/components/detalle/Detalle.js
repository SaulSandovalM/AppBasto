<<<<<<< HEAD
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Button, Header, Card, CardItem} from 'native-base';

export default class Detalle extends Component < {} > {
  render() {
    return (
      <Container>
        <Header/>
        <Content>

          <View style={{flexDirection: 'row'}}>
          <Card style={{height: 150}}>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
            </CardItem>
          </Card>
          <Card style={{height: 150}}>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
            </CardItem>
          </Card>
          <Card style={{height: 150}}>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
            </CardItem>
          </Card>
        </View>

        <View style={{flexDirection: 'row'}}>
        <Card style={{height: 150}}>
          <CardItem cardBody>
            <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
          </CardItem>
        </Card>
        <Card style={{height: 150}}>
          <CardItem cardBody>
            <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
          </CardItem>
        </Card>
        <Card style={{height: 150}}>
          <CardItem cardBody>
            <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
          </CardItem>
        </Card>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Card style={{height: 150}}>
        <CardItem cardBody>
          <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
        </CardItem>
      </Card>
      <Card style={{height: 150}}>
        <CardItem cardBody>
          <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
        </CardItem>
      </Card>
      <Card style={{height: 150}}>
        <CardItem cardBody>
          <Image source={{uri: 'https://cdn.thinglink.me/api/image/533940949403828224/1240/10/scaletowidth'}} style={{height: 50, flex: 1}}/>
        </CardItem>
      </Card>
    </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
=======
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import {Encabezado} from "../Comun/Encabezado";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class Detalle extends Component<{}> {
    render() {
        return (
            <Container>
                <Encabezado headerText={'CATEGORIA 1'}/>

                <ScrollView>

                    <Text>Lista de Imagenes</Text>

                </ScrollView>

            </Container>
        );
    }
}
>>>>>>> 60d8c0f166646f53e3a9b3176656525fd12684de
