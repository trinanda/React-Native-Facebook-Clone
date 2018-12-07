import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'

export default class EditButton extends Component{
    render(){
        return(
            <Container style={ StyleSheet.viewEditButton }>
                <Text style={{ color: '#4267B2'}}>
                    { this.props.text }
                </Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    viewEditButton: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})