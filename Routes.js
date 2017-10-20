import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from './src/components/bienvenida/Bienvenida';
import Login from './src/components/login/Login';
import Principal from './src/components/principal/Principal';
import Detalle from './src/components/detalle/Detalle';
import Registro from './src/components/login/Registro';
import Recover from './src/components/login/Recover';
import detalleProducto from './src/components/detalleproducto/detalleProducto';
import Carrito from './src/components/carrito/Carrito';
import Perfil from './src/components/perfil/Perfil';
import Inicio from './src/components/bienvenida/Inicio';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Inicio" header={null} component={Inicio} initial/>
        <Scene key="Bienvenida" header={null} component={Bienvenida} />
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Recover" header={null} component={Recover}/>
        <Scene key="Principal" header={null} component={Principal}/>
        <Scene key="detalleProducto" header={null} component={detalleProducto}/>
        <Scene key="Detalle" header={null} component={Detalle}/>
        <Scene key="Carrito" header={null} component={Carrito}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
      </Scene>
    </Router>
    </Root>
  );
};

export default Routes;
