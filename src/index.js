import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Navigator } from './route';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Navigator />
      </View>
    );
  }
}


