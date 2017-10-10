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
