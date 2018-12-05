import React, { Component } from 'react';
import { Container, Title, Footer, FooterTab, Content, Card, CardItem,
   Thumbnail, Header, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>

          <Body>
            {/* <Title>Header</Title> */}

          </Body>
          <Right>
            <Icon name = 'search' style = {{marginRight: 20}}></Icon>
          </Right>
        </Header>
        <Header style = {{backgroundColor: 'white'}}>
          <Icon name = 'card' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
          <Icon name = 'people' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
          <Icon name = 'chatboxes' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
          <Icon name = 'globe' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
          <Icon name = 'menu' style = {{ margin: 10, marginRight: 10, width: 50, height: 50 }}></Icon>
        </Header>
        <Content>
          <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={require('./assets/images/pp1.jpeg')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/images/content1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text style = {{fontSize: 11}}>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style = {{fontSize: 11}}>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="share" />
                  <Text style = {{fontSize: 11}}>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
