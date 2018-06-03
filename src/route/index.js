import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Main, Deck, Quiz } from '../screens';
import { colors } from '../styles';

const Navigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Deck: {
      screen: Deck
    },
    Quiz:{
      screen: Quiz
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
