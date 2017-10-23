import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {firebaseAuth} from '../firebase/Firebase';
import {Actions} from 'react-native-router-flux';
import {Spinner} from 'native-base';

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

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return Actions.Principal();
      case false:
        return Actions.Bienvenida();
      default:
        return <Spinner size='large'/>
    }
  };

  render() {
    return (<View onStatusChange={this.renderContent()}/>);
  }
}

export default Inicio;
