/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Card, Icon} from 'native-base';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';



export const ProductItem = ({ setVisible, index, image }) => {
    return (
        <TouchableOpacity onPress={()=>setVisible(index)}>
            <Card>
                <Image source={{
                    uri: image
                }} style={styles.img}/>
                <View style={styles.view5}>
                    <Icon name="ios-star-outline" style={styles.icon}/>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

//ProductItem.propTypes = {};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    view2: {
        flexDirection: 'row'
    },
    view3: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    view4: {
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    view5: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    content: {
        backgroundColor: '#fff'
    },
    fondo: {
        justifyContent: 'center',
        height: 50,
        width: null
    },
    texto: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    text: {
        alignSelf: 'center'
    },
    scroll: {
        marginBottom: 10
    },
    img: {
        height: 150,
        width: 150,
        flex: 1
    },
    img2: {
        width: '100%',
        height: 150
    },
    button: {
        alignSelf: 'center',
        borderColor: 'white'
    },
    icon: {
        color: "green"
    }
});

