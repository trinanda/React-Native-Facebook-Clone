import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import Homepage from './src/screens/Homepage.js'
import Menu from './src/screens/Menu.js'
import Login from './src/screens/Login.js'
import Messages from './src/screens/Messages.js'
import ProfilePage from './src/screens/ProfileScreens/ProfilePage.js'

const AppNavigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
  },
  Messages: {
    screen: Messages,
  },
  Login: {
    screen: Login,
  },
  Menu: {
    screen: Menu,
  },
  ProfilePage: {
    screen: ProfilePage,
  },
}, {
    headerMode: 'none',
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);
