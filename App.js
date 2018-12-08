import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Homepage from './src/screens/Homepage.js'
import Menu from './src/screens/Menu.js'
import Login from './src/screens/Login.js'
import Messages from './src/screens/Messages.js'
import ProfilePage from './src/screens/ProfilePage.js'
import UserProfile from './src/screens/UserProfile.js'

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
  UserProfile: {
    screen: UserProfile,
  },
}, {
    headerMode: 'none',
    initialRouteName: 'UserProfile',
});

export default createAppContainer(AppNavigator);
