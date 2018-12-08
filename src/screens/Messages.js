import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity } from 'react-native'

import HeaderMod from '../components/HeaderMod.js'
import HeaderSearch from '../components/HeaderSearch.js'


export default class Messages extends Component {
  render() {
    return (
      <Container>
        <HeaderSearch navigationsData={this.props.navigation} />

        <HeaderMod navigationsData={this.props.navigation} />

        <Content>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/Kaka.jpeg')} />
              </Left>
              <Body>
                <Text>Kaka</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>5:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/Cristiano.jpg')} />
              </Left>
              <Body>
                <Text>Cristiano</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>11:22 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/Zidane.jpg')} />
              </Left>
              <Body>
                <Text>Zidane</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>

        </Content>
      </Container>
    );
  }
}
