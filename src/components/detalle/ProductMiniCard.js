/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Icon, Card, CardItem, Left, Text, Button} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';

export const ProductMiniCard = ({sellPrice, name, image}) => {
    return (
        <Card style={styles.estiloCard}>
            <CardItem style={styles.estiloCardI}>
                <Left style={styles.cardL}>
                    <Text>{name}</Text>
                    <Text note>${sellPrice}</Text>
                </Left>
            </CardItem>
            <Image source={{uri: image}} style={styles.img}/>
            <Button bordered iconRight style={styles.btn} onPress={() => alert('Agregado!')}>
                <Text >Agregar al Carrito</Text>
                <Icon name="cart" style={styles.icon}/>
            </Button>
        </Card>

    );
};

//ProductMiniCard.propTypes = {};

const styles = StyleSheet.create({

    estiloCard: {
        borderColor: 'green',
        borderWidth: 3,
        maxWidth:"48%",
        minWidth:"48%",
        flex:1
    },
    estiloCardI: {
        borderColor: 'green',
        borderWidth: 1
    },
    cardL: {
        //justifyContent: 'space-between'
    },
    btn: {
        alignSelf: 'stretch',
        borderColor: 'green'
    },
    img: {
        height: 100,
        width: null,
        flex: 1,
        borderColor: 'green',
        borderWidth: 1
    },
    icon: {
        color: "green"
    }
});

