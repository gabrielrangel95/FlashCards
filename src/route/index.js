import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Main, Deck } from '../screens';
import { colors } from '../styles';

const Navigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Deck: {
      screen: Deck
    }
  },
  {
    navigationOptions:{
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    }
  }
)

export { Navigator }
