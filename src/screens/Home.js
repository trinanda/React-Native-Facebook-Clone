import React, { Component } from 'react';
import { Button, Text, View } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />

        <Text>Homepage</Text>
        <Button
          title = "Homepage"
          onPress={() =>{
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Homepage' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}

export default HomeScreen
