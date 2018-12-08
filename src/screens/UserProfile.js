import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { Icon, Label, Item, Container } from 'native-base'
import HeaderSearch from '../components/HeaderSearch.js'
import HeaderMod from '../components/HeaderMod.js'

export default class UserProfile extends Component{
    render(){
        return(
            <Container>
                <HeaderSearch navigationsData = {this.props.navigation} />
                <HeaderMod navigationsData = {this.props.navigation} />
                
                <Image
                    source={require('../images/Ali_cover.jpg')}
                    style={{ width: Dimensions.get('window').width, height: 200 }}
                />
                <Container style={{ width: Dimensions.get('window').width, alignItems: 'center'}}>
                    <Image
                        source={require('../images/Ali.jpeg')}
                        style={{ width: 150, height: 150, borderWidth: 1.5, borderColor: 'white', top: -50, borderRadius: 100}}
                    />
                </Container>
            </Container>
        )
    }
}