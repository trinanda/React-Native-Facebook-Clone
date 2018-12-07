import React, { Component } from 'react'
import { Container } from 'native-base'
import { View } from 'react-native'

import ProfileIntroCardItem from './ProfileIntroCardItem.js'
import EditButton from './EditButton.js'

export default class ProfileIntroCard extends Component{
    render(){
        return(
            <Container style={{ backgroundColor: 'white'}}>
                <Container style={{ flex: 1, flexDirection: 'column'}}>
                    <ProfileIntroCardItem
                        iconType='Octicons'
                        iconName='home'
                        textLabel='Live in'
                        textValue='Payakumbuh'
                    />
                    <ProfileIntroCardItem
                        iconType='MaterialCommunityIcons'
                        iconName='map-marker-outline'
                        textLabel='From'
                        textValue='Payakumbuh'
                    />
                    <ProfileIntroCardItem
                        iconName='MaterialCommunityIcons'
                        iconName='logo-rss'
                        textLabel='Followed by'
                        textValue='99 peoples'
                    />
                    <EditButton text='EDIT DETAILS'/>
                </Container>
            </Container>
        )
    }
}