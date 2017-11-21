import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from './components/bienvenida/Bienvenida';
import Login from './components/login/Login';
import Principal from './components/principal/Principal';
import Detalle from './components/detalle/Detalle';
import Registro from './components/login/Registro';
import Recover from './components/login/Recover';
import detalleProducto from './components/detalleproducto/detalleProducto';
import Carrito from './components/carrito/Carrito';
import Perfil from './components/perfil/Perfil';
import Inicio from './components/bienvenida/Inicio';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Inicio" header={null} component={Inicio} initial/>
        <Scene key="Bienvenida" header={null} component={Bienvenida} />
        <Scene key="Login" header={null} component={Login} />
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
