import React, { Component } from 'react'
import { Container } from 'native-base'
import { Image, StyleSheet } from 'react-native'

import PhotosHeader from './PhotosHeader.js'
import SeeAllText from './SeeAllText.js'


export default class Photos extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: '#DCDEE3'}}>
                <Container style={ styles.container }>
                    <PhotosHeader />
                    <Container style={ styles.viewGallery }>
                        <Container style={{ flex: 1}}>
                            <Image
                                source={require('../../images/Ali.jpeg')}
                            />
                            <Image
                                source={require('../../images/Ali.jpeg')}
                            />
                        </Container>
                        <Container style={{ flex: 1, alignItems: 'flex-end'}}>
                            <Image
                                source={require('../../images/Ali.jpeg')}
                                style={{ width: 190, height: 126, marginBottom: 3}}
                            />
                            <Image
                                source={require('../../images/Ali.jpeg')}
                                style={{ width: 190, height: 126, marginBottom: 3}}
                            />
                            <Image
                                source={require('../../images/Ali.jpeg')}
                                style={{ width: 190, height: 126, marginBottom: 3}}
                            />
                        </Container>
                    </Container>
                    <SeeAllText text='Photos' />
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10
    },
    viewGallery: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    }
})