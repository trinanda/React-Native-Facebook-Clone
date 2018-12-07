import React, { Component } from 'react'
import { Container, Label } from 'native-base'
import { Image, StyleSheet } from 'react-native' 


export default class StatusTotalReact extends Component{
    render(){
        return(
            <Container style={ StyleSheet.container }>
                <Image
                    source={require('../../images/Ali.jpeg')}
                    style={{ width: 20, height: 20 }}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row'
    }
})