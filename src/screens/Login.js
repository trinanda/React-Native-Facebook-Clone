import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, InputText } from 'native-base';
import { Image } from 'react-native'

import HeaderMod from '../components/HeaderMod.js'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Container>
        <Header />
        <Content style = {{backgroundColor: '#3b5998'}}>
          <Image source = {require('../icons/facebook.jpg')} style={{height: 50, width: 50, marginTop: 60, alignSelf: 'center'}}/>
          <Form style = {{ marginTop: 30, paddingLeft: 30, paddingRight: 30 }}>
            <Item floatingLabel last>
              <Input keyboardType='email-address' placeholder='Username' placeholderTextColor='#fff' style = {{color: '#fff', fontFamily: 'Helvetica', width: 20}}/>
            </Item>
            <Item floatingLabel last>
              <Input secureTextEntry={true} placeholder='Password' placeholderTextColor='#fff' style = {{color: '#fff', fontFamily: 'Helvetica', width: 20}}/>
            </Item>

            <Button onPress = {() => this.props.navigation.navigate('Homepage')} block style = {{marginTop: 15, backgroundColor: 'rgb(139,157,195)'}}>
                <Text style = {{ fontFamily: 'Helvetica'}}>Login</Text>
            </Button>

          </Form>
          <Container style = {{backgroundColor: '#3b5998', paddingTop: 50}}>
            <Text style = {{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>Sign Up for Facebook</Text>
            <Text></Text>
            <Text style = {{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>Forgot Password?</Text>
          </Container>
      </Content>
      </Container>
    );
  }
}
