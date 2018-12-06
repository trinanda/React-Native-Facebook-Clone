import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import Homepage from './src/screens/Homepage.js'
import Menu from './src/screens/Menu.js'
import Messages from './src/screens/Messages.js'
import Login from './src/screens/Login.js'

const AppNavigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
  },
  Menu: {
    screen: Menu,
  },
  Messages: {
    screen: Messages,
  },
  Login: {
    screen: Login,
  },
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
