import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Label } from 'native-base'

export default class PhotosHeader extends Component{
    render(){
        return(
            <Container style={ StyleSheet.container }>
                <Container style={ styles.leftHeader }>
                    <Image
                        source={require('../../images/Ali.jpeg')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Label style={ styles.leftHeaderText}PhotosHeader></Label>
                </Container>
                <Label style={{ color: '#3578E5'}}ADD PHOTO></Label>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    leftHeaderText: {
        color: 'black',
        fontSize: 17,
        paddingLeft: 7,
        fontWeight: 'bold',
    }
})