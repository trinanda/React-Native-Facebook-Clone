import React, { Component } from 'react'
import { Header, Input, Body, Right, Icon, Left, Item } from 'native-base'
import { TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';


export default class HeaderSearch extends Component{
  render(){
    return(

      <Header style={{ backgroundColor: '#4267B2' }}>
     		<Left style={{ flex: 1 }}>
          <TouchableOpacity>
       			<Icon
             name='camera'
             style={{ color:'white'}}
            />
          </TouchableOpacity>
     		</Left>
      	<Body style={{ flex: 5, left: -15 }} >
     			<Item>
     				<Icon
             name='md-search'
             style={{ color: 'white' }}
            />
     				<TextInput
     				 placeholder={ this.props.placeholder }
     				 placeholderTextColor='white'
             style={{ color: 'white', width: Dimensions.get('window').width - 120 }}
     				/>
     			</Item>
      	</Body>
        <Right>
          <TouchableOpacity onPress = {() => this.props.navigationsData.navigate('Messages')}>
            <Icon type='MaterialCommunityIcons' name='facebook-messenger' style={{ color:'white'}}></Icon>
          </TouchableOpacity>
        </Right>

      </Header>
    )
  }
}
