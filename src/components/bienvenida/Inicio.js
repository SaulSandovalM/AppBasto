import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {firebaseAuth} from '../firebase/Firebase';
import {Actions} from 'react-native-router-flux';
import {Spinner, Container} from 'native-base';
import Bienvenida from './Bienvenida';
import Principal from '../principal/Principal';

class Inicio extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  render() {
    return (
      <Container>
        {this.state.loggedIn
          ? <Principal/>
          : <Bienvenida/>}
      </Container>
    );
  }
}

export default Inicio;
