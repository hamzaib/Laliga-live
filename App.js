import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


import MatchScreen from './pages/matches';
import RankingScreen from './pages/rankings';
import HighlightScreen from './pages/highlights';

import SignupScreen from './pages/signup';
import Login from './pages/login.js';




// Switch Navigator
const AuthNavigator = createSwitchNavigator(
  {
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Signup'
  }
);

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
  {
    MATCHES: { screen: MatchScreen },
    RANKINGS: { screen: RankingScreen },
   HIGHLIGHTS: { screen: HighlightScreen },

  },
  {
    initialRouteName: 'MATCHES',

  }
)

const image = require('./assets/logout.png')

// app entry point
export default createAppContainer(
  createStackNavigator(

    

    {
      Auth: {
        screen: AuthNavigator,
        navigationOptions: {
          title: 'SIGNUP',
        },
      },

      App: {
        screen: HomeNavigator,
        navigationOptions: {
          title: "Welcome",
          headerBackTitle: 'Log out',
          headerBackImage: <Image style={{marginLeft:5, height:22, width: 22}} source={require('./assets/logout.png')} />,
        },
      }


    },


    {
      initialRouteName: 'Auth', // which screen / navigations stack to begin with 
      transitionConfig: () => fromLeft(), 

      headerBackTitleVisible: true,
      defaultNavigationOptions: {
        gesturesEnabled: false,
        headerBackTitle: " Log out",

      }
    }
  )
);

