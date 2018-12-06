import React, { Component } from 'react'
import { Header, Input, Body, Right, Icon } from 'native-base'

export default class HeaderSearch extends Component{
  render(){
    return(
      <Header>
        <Body>
          <Input placeholder='Cari' placeholderTextColor='#fff' style={{width: 300, color: 'white', fontSize: 19}}/>
        </Body>
        <Right>
          <Icon name = 'search' style = {{marginRight: 20, color: 'white'}}></Icon>
        </Right>
      </Header>
    )
  }
}
