import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Label } from 'native-base'

export default class SeeAllText extends Component{
    render(){
        return(
            <Container style= { StyleSheet.container }>
                <Label>See All { this.props.text }</Label>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    }
})