import React, { Component } from 'react'
import { Container, Label } from 'native-base'
import { Image, Dimensions } from 'react-native'


export default class StatusConent extends Component{
    render(){
        return(
            <Container>
                <Label style={{ color: 'black', marginLeft: 10, margin: 5}}>
                    { this.props.text}
                </Label>
                <Image
                    source={{ uri: this.props.image }}
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width}}
                />
            </Container>
        )
    }
}