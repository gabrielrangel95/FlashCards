import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Main } from '../screens';

const Navigator = createStackNavigator(
  {
    Main: {
      screen: Main
    }
  }
)

export { Navigator }
