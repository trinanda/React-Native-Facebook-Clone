import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Container } from 'native-base'

import TimelineCover from './TimelineCover.js'
import HeaderSearch from '../../components/HeaderSearch.js';
import TimelineCoverButton from '../../screens/ProfileScreens/TimelineCoverButton.js'
import ProfileIntroCard from '../../screens/ProfileScreens/ProfileIntroCard.js'
import GalleryProfileIntro from '../../screens/ProfileScreens/GalleryProfileIntro.js'


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
        </ScrollView>
      </Container>
    )
  }
}