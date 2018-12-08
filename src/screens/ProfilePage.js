import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Container } from 'native-base'

import TimelineCover from './ProfileScreens/TimelineCover.js'
import HeaderSearch from '../components/HeaderSearch.js';
import TimelineCoverButton from './ProfileScreens/TimelineCoverButton.js'
import ProfileIntroCard from './ProfileScreens/ProfileIntroCard.js'
import GalleryProfileIntro from './ProfileScreens/GalleryProfileIntro.js'
import StatusInput from './ProfileScreens/StatusInput.js'
import Photos from './ProfileScreens/Photos.js'
import Friends from './ProfileScreens/Friends.js'
import Filter from './ProfileScreens/Filter.js'
import Status from './ProfileScreens/Status.js'


export default class ProfilePage extends Component {
  render(){
    return(
      <Container style={{ flex: 1}}>
        <HeaderSearch placeholder='Search' navigationsData = {this.props.navigation}/>
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
      </Container>
    )
  }
}