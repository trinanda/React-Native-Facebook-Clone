import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { TouchableOpacity } from 'react-native'

import HeaderMod from '../components/HeaderMod.js'

export default class Messages extends Component {
  render() {
    return (
      <Container>
        <Header />

        <HeaderMod navigationsData={this.props.navigation} />

        <Content>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/pp1.jpeg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/pp2.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/pp3.jpeg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
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
