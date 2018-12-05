import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>

          <Body>
            {/* <Title>Header</Title> */}
          </Body>
        </Header>
        <Header style = {{backgroundColor: 'white'}}>
          <Icon name = 'card'></Icon>
          <Icon name = 'people'></Icon>
          <Icon name = 'chatboxes'></Icon>
          <Icon name = 'globe'></Icon>
          <Icon name = 'menu'></Icon>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>
    );
  }
}
