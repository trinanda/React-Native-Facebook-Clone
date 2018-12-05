import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/Home.js'
import DetailsScreen from './screens/Details.js'
import Homepage from './screens/Homepage.js'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Homepage: {
    screen: Homepage,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
