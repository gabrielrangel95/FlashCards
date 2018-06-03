import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Navigator } from './route';
import { notificationsConfig }  from './services/notification';
import store from './redux/store';


export default class App extends Component {
  componentDidMount(){
    notificationsConfig();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Navigator />
        </View>
      </Provider>
    );
  }
}


