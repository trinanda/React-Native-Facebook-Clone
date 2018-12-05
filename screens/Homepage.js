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

        {/*------------------------Content 1------------------------*/}
          <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={require('./assets/images/pp1.jpeg')} />
                  <Body>
                    <Text>Budi</Text>
                    <Text note>4 Des pukul 10.21 AM</Text>
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
                  <Text style = {{fontSize: 11}}>33 Likes</Text>
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
          {/*------------------------Content 1------------------------*/}

          {/*------------------------Content 2------------------------*/}
          <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={require('./assets/images/pp2.jpg')} />
                  <Body>
                    <Text>Andi</Text>
                    <Text note>12 Des pukul 12:12 PM</Text>
                  </Body>
                </Left>
              </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/images/content2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text style = {{fontSize: 11}}>4 Likes</Text>
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
          {/*------------------------Content 2------------------------*/}

          {/*------------------------Content 3------------------------*/}
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/images/pp3.jpeg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./assets/images/content3.jpeg')} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text style = {{fontSize: 11}}>99 Likes</Text>
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
          {/*------------------------Content 3------------------------*/}
        </Content>
      </Container>
    );
  }
}
