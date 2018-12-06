import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail, Button } from 'native-base';
export default class ListIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
                <Thumbnail source={require('./src/images/Ali.jpeg')} style={{borderRadius: 25, borderWidth: 2, height: 40, width: 40}}/>
          </Left>
            <Body>
              <Text>Ali</Text>
                <Text style={{color: '#dadada', fontSize: 13, fontFamily: 'sans-serif'}}>Lihat profile Anda</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
