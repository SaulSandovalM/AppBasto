import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import {Encabezado} from "../Comun/Encabezado";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class Contenido extends Component<{}> {
    render() {
        return (
            <Container>
                <Encabezado headerText={'APPBASTO'}/>

                <ScrollView>

                    <CardItem>
                        <Body>
                        <Text>
                            CATEGORIA 1
                        </Text>
                        </Body>
                    </CardItem>

                <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal={true}>

                    <Card>
                        <CardItem>
                            <Image source={{uri: 'http://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/jitomate2.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Image source={{uri: 'http://blogesp.diabetv.com/wp-content/uploads/2015/04/papa.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                        </CardItem>
                    </Card>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'http://cdn.masdemx.com/wp-content/uploads/2016/08/chiles-mas-picantes-mexico.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                            </CardItem>
                        </Card>
                    </ScrollView>
                </View>

                <CardItem>
                    <Body>
                    <Text>
                        CATEGORIA 2
                    </Text>
                    </Body>
                </CardItem>
                <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal={true}>

                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://super.walmart.com.mx/images/product-images/img_large/00750102540304L.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'http://www.colgatecommercial.com/App_Themes/ColgateStyle/Images/products/53096-lrg.png'}} style={{height: 200, width: 200, flex: 1}}/>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://pedidos.com/myfotos/xLarge/(X)CLX-CLORO-930ML.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                            </CardItem>
                        </Card>
                    </ScrollView>
                </View>

                    <CardItem>
                        <Body>
                        <Text>
                            CATEGORIA 3
                        </Text>
                        </Body>
                    </CardItem>
                    <View style={{flexDirection:'row'}}>
                        <ScrollView horizontal={true}>

                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'http://www.lamoderna.com.mx/templates/LaModerna/images/categories/pastas/pastas-la-moderna-mobile.png'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'https://i5.walmartimages.com/asr/4f552695-250f-4778-a1bf-b6aaa2f13728_1.135100d3d2562bc4adb81e96ddd88de6.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'http://www.chedraui.com.mx/media/catalog/product/cache/10/image/950x950/9df78eab33525d08d6e5fb8d27136e95/7/5/750103912014_00.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                        </ScrollView>
                    </View>

                    <CardItem>
                        <Body>
                        <Text>
                            CATEGORIA 4
                        </Text>
                        </Body>
                    </CardItem>
                    <View style={{flexDirection:'row'}}>
                        <ScrollView horizontal={true}>

                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'http://www.colgate.com.mx/CP15/es/mx/oc/products/toothpaste/images/total-clean-mint.png'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'https://target.scene7.com/is/image/Target/14413690?wid=520&hei=520&fmt=pjpeg'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51BxpJHnDJL._SX355_.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                                </CardItem>
                            </Card>
                        </ScrollView>
                    </View>

                </ScrollView>




            </Container>
        );
    }
}
