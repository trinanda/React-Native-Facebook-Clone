import React, { Component } from 'react';
import { Container, Title, Footer, FooterTab, Content, Card, CardItem,
   Thumbnail, Header, Text, Button, Icon, Left, Body, Right, Input } from 'native-base';
import { Image, StyleSheet } from 'react-native';

import HeaderMod from '../components/HeaderMod.js'

export default class Homepage extends Component {
  render() {
    return (
      <Container>
        <Header>

          <Body>
            {/* <Title>Header</Title> */}

            <Input placeholder='Cari' placeholderTextColor='#fff' style={{width: 300, color: 'white', fontSize: 19}}/>
          </Body>
          <Right>
            <Icon name = 'search' style = {{marginRight: 20, color: 'white'}}></Icon>
          </Right>
        </Header>

        {/* */}
        <HeaderMod navigationsData = {this.props.navigation} />

        <Content>
          <Container style={styles.container}>
            <Image style={styles.image} source={require('../images/pp2.jpg')}/>
              <Input placeholder='Apa yang sedang Anda pikir kan..?' style={styles.text}/>


          </Container>

        {/*------------------------Content 1------------------------*/}
          <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={require('../images/pp1.jpeg')} />
                  <Body>
                    <Text>Budi</Text>
                    <Text note>Just now</Text>
                  </Body>
                </Left>
              </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/content1.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
                  <Thumbnail source={require('../images/pp2.jpg')} />
                  <Body>
                    <Text>Andi</Text>
                    <Text note>12 Des pukul 12:12 PM</Text>
                  </Body>
                </Left>
              </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/content2.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
                <Thumbnail source={require('../images/pp3.jpeg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../images/content3.jpeg')} style={{height: 200, width: '100%', flex: 1}}/>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#BDBDBD'
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  }
})
