/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AppContainer from './src/navigation/AppSwitchNavigator';
import 'react-native-gesture-handler';

class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

export default App;
