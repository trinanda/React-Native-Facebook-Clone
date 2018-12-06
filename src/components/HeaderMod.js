import React, { Component } from 'react'
import { Header, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'

export default class HeaderMod extends Component{
  render(){
    return(
      <Header style = {{backgroundColor: 'white'}}>
        <Icon name = 'card' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
        <Icon name = 'people' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
        <Icon name = 'chatboxes' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>

        <TouchableOpacity onPress={() => this.props.navigationHomePage.navigate('Homepage')}>
          <Icon name = 'globe' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
        </TouchableOpacity>

        <Icon name = 'menu' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
      </Header>
    )
  }
}
