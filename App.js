import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Thumbnail, Button } from 'native-base';
import { View } from 'react-native'


export default class Menu extends Component {
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

          <List style={{height: 19, backgroundColor: "#dadada", fontFamily: 'sans-serif'}}>
            <Text style={{fontSize: 12, paddingLeft: 7}}>GROUPS</Text>
          </List>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('./src/icons/ubuntu.png')} style = {{height: 45, width: 45}} />
            </Left>
            <Body>
              <Text>Ubuntu Linux Indonesia</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('./src/icons/python.png')} style = {{height: 45, width: 45}} />
            </Left>
            <Body>
              <Text>Python Indonesia</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
                <Thumbnail source={require('./src/icons/icons8-ubuntu-32.png')} style = {{height: 45, width: 45}} />
            </Left>
            <Body>
              <Text>Ubuntu Linux Indonesia</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
    );
  }
}
