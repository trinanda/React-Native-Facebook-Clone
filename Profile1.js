import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTitle from './indryanto/HeaderTitle.js';
import TimelineCover from './indryanto/TimelineCover.js';
import TimelineCoverButton from './indryanto/TimelineCoverButton.js';
import ProfileIntroCard from './indryanto/ProfileIntroCard.js';
import GalleryProfileIntro from './indryanto/GalleryProfileIntro.js';
import StatusInput from './indryanto/StatusInput.js';
import Photos from './indryanto/Photos.js';
import Friends from './indryanto/Friends.js';
import Filter from './indryanto/Filter.js';
import Status from './indryanto/Status.js';

export default class ProfilePage extends Component {
    render(){
        return(
            <View style={{ flex: 1 }}>
                <HeaderTitle placeholder='Search' />
                <ScrollView>
                    <TimelineCover />
                    <TimelineCoverButton />
                    <ProfileIntroCard />
                    <GalleryProfileIntro />
                    <StatusInput />
                    <Photos />
                    <Friends />
                    <Filter />
                    <Status />
                </ScrollView>
            </View>
        );
    }
}
