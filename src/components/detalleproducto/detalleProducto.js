import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Alert} from 'react-native';
import {Container, Content, Card, CardItem, Body} from 'native-base';
import {Header} from "../comun";

export default class detalleProducto extends Component < {} > {
    render() {
        return (
            <View>
                <Header headerText={'ProductoID'}/>
                <View style={{flexDirection:'row'}}>

                        <Card style={{width:'50%', height:200}}>

                            <Image source={{
                                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
                            }} style={{
                                height: 200,
                                width: 200,
                                flex: 1
                            }}/>

                        </Card>

                    <View style={{width:'50%', marginTop:5}}>
                        <Text >ProductoID</Text>
                        <Text >Descripción</Text>
                        <Text >Cantidad</Text>
                        <Text >Agregar al carrito</Text>
                    </View>

                </View>

            </View>
        );
    }
}
