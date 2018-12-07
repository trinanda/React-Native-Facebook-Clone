import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'

import EditButton from './EditButton.js'
import MoreInfo from './MoreInfo.js'

export default class GalleryProfileIntro extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: 'white'}}>
                <Container style={{ marginTop: 5, flex: 1, flexDirection: 'column'}}>
                    <Container style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image
                            source={require('../../images/Ali_cover.jpg')}
                        />
                        <Image
                            source={require('../../images/Ali_cover.jpg')}
                        />
                        <Image
                            source={require('../../images/Ali_cover.jpg')}
                        />
                    </Container>
                    <Container style={{ marginTop: 5, flex: 1,flexDirection: 'row'}}>
                        <Image
                            source={require('../../images/Ali_cover.jpg')}
                            style={{ marginRight: 7, width: 123, height: 123}}
                        />
                         <Image
                            source={require('../../images/Ali_cover.jpg')}
                            style={{ marginRight: 7, width: 123, height: 123}}
                        />
                    </Container>
                    <EditButton text='EDIT FEATURED' />
                    <MoreInfo
                        text='www.facebook.com'
                        iconType='Feather'
                        iconName='globe'
                    />
                    <MoreInfo
                        text='www.com'
                        iconType='Feather'
                        iconName='globe'
                    />
                    <Container style={ StyleSheet.viewButton }>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ABOUT</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>PHOTOS</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>FRIENDS</Text>
                    </Container>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    viewButton: {
        backgroundColor: '#F6F7F8',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})