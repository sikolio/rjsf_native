/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Root from './app/native/containers/Root';
import configureStore from './app/store/configureStore.prod.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const store = configureStore();

export default class ReactNativeWeb extends Component {
  render() {
    return (
      <Root store={store}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
