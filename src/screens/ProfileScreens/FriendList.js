import React, { Component } from 'react'
import { Icon, Container, Label } from 'native-base'
import { Image } from 'react-native'

export default class FriendList extends Component{
    render(){
        return(
            <Container>
                <Image
                    source={{ uri: this.props.image}}
                    style={{ width: 120, height: 120}}
                />
                <Container style={{ paddingLeft: 5}}>
                    <Label style={{ color: 'black', fontWeight: 'bold'}}>
                        { this.props.name }
                    </Label>
                    <Container style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ fontSize: 20, color: '#3578E5'}}
                            type='Entypo'
                            name='dot-single'
                        />
                        <Label>{ this.props.posts }</Label>
                    </Container>
                </Container>
            </Container>
        )
    }
}