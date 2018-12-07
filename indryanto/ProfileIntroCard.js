import React, { Component } from 'react';
import { View } from 'react-native';

import ProfileIntroCardItem from './ProfileIntroCardItem.js';
import EditButton from './EditButton.js';

export default class ProfileIntroCard extends Component {
    render(){
        return(
            <View style={{ backgroundColor: 'white' }}>
                <View sytle={{ flex: 1, flexDirection: 'column', }}>
                    <ProfileIntroCardItem
                     iconType='Octicons'
                     iconName='home'
                     textLabel='Live in'
                     textValue='Yogyakarta'
                    />
                    <ProfileIntroCardItem
                     iconType='MaterialCommunityIcons'
                     iconName='map-marker-outline'
                     textLabel='From'
                     textValue='Yogyakarta'
                    />
                	<ProfileIntroCardItem
                     iconType='MaterialCommunityIcons'
                     iconName='rss'
                     textLabel='Followed by'
                     textValue='99 peoples'
                    />
                    <EditButton text='EDIT DETAILS' />
                </View>
            </View>
        );
    }
}
