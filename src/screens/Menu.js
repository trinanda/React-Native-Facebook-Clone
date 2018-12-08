import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Item,
  Left, Body, Right, Switch, Thumbnail, Button } from 'native-base';

import HeaderMod from '../components/HeaderMod.js'
import HeaderSearch from '../components/HeaderSearch.js'


export default class Menu extends Component {
  render() {
    return (
      <Container>
        <HeaderSearch navigationsData = {this.props.navigation} />
        <HeaderMod navigationsData = {this.props.navigation} />

        <Content>

          <ListItem icon>
              <Left>
                <Item onPress = {() => this.props.navigation.navigate('UserProfile')}>
                  <Thumbnail source={require('../images/Ali.jpeg')} style={{borderRadius: 25, borderWidth: 2, height: 40, width: 40}}/>
                </Item>
              </Left>
              <Body>
                <Text>Ali</Text>
                  <Text style={{color: '#dadada', fontSize: 13, fontFamily: 'sans-serif'}}>Lihat profile Anda</Text>
              </Body>
          </ListItem>

          <List style={{height: 19, backgroundColor: "#dadada", fontFamily: 'sans-serif'}}>
            <Text style={{fontSize: 12, paddingLeft: 7}}>GROUPS</Text>
          </List>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('../icons/ubuntu.png')} style = {{height: 40, width: 40}} />
            </Left>
            <Body>
              <Text>Ubuntu Linux Indonesia</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('../icons/python.png')} style = {{height: 40, width: 40}} />
            </Left>
            <Body>
              <Text>Python Indonesia</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('../icons/javascript-grup-fb-Indo.jpg')} style = {{height: 40, width: 40}} />
            </Left>
            <Body>
              <Text>Javascript Indonesia</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
    );
  }
}
