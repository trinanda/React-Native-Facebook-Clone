import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Container } from 'native-base'

import TimelineCover from './TimelineCover.js'
import HeaderSearch from '../../components/HeaderSearch.js';
import TimelineCoverButton from '../../screens/ProfileScreens/TimelineCoverButton.js'
import ProfileIntroCard from '../../screens/ProfileScreens/ProfileIntroCard.js'
import GalleryProfileIntro from '../../screens/ProfileScreens/GalleryProfileIntro.js'
import StatusInput from '../../screens/ProfileScreens/StatusInput.js'
import Photos from '../../screens/ProfileScreens/Photos.js'
import Friends from '../../screens/ProfileScreens/Friends.js'
import Filter from '../../screens/ProfileScreens/Filter.js'
import Status from '../../screens/ProfileScreens/Status.js'


export default class ProfilePage extends Component {
  render(){
    return(
      <Container>
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