import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Item, Icon, Container } from 'native-base'

export default class TimelineCoverButton extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: 'white'}}>
                <Container style={{ top: -20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ color: '#4267B2'}}Add a temporary bio></Text>
                    <Container style={{ flex: 1, flexDirection: 'row'}}>
                        <Item style={{ flex: 1, flexDirection: 'column'}}>
                            <Icon
                                type='FontAwesome'
                                name='user-o'
                            />
                            <Text>Edit Profile</Text>
                        </Item>
                        <Item style={{ flex:1, flexDirection: 'column'}}>
                            <Icon
                                type='Entypo'
                                name='list'
                            />
                            <Text>Activity Log</Text>
                        </Item>
                        <Item style={{ flex: 1, flexDirection: 'column'}}>
                            <Icon
                                type='MaterialIcons'
                                name='more-horiz'
                            />
                            <Text>More</Text>
                        </Item>
                    </Container>
                </Container>
            </Container>
        )
    }
}