import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Header, Card} from "../comun";

export default class detalleProducto extends Component < {} > {
    render() {
        return (
            <View>
                <Header headerText={'ProductoID'}/>
                <View style={{flexDirection:'row', height: 200}}>

                        <Card>

                            <Image source={{
                                uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'
                            }} style={{
                                height: 200,
                                width: 200,
                                flex: 1
                            }}/>

                        </Card>

                    <View style={{marginTop:10}}>
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
