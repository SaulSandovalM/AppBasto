import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from './src/components/bienvenida/Bienvenida';
import Login from './src/components/login/Login';
import Principal from './src/components/principal/Principal';
import Detalle from './src/components/detalle/Detalle';
import Registro from './src/components/login/Registro';
import Recover from './src/components/login/Recover';
import detalleProducto from "./src/components/detalleproducto/detalleProducto";

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Bienvenida" header={null} component={Bienvenida} initial/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Recover" header={null} component={Recover}/>
        <Scene key="Principal" header={null} component={Principal}/>
        <Scene key="detalleProducto" header={null} component={detalleProducto}/>
        <Scene key="Detalle" header={null} component={Detalle}/>
      </Scene>
    </Router>
    </Root>
  );
}

export default Routes;
