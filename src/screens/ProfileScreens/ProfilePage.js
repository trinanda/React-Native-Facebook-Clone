import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import TimelineCover from './TimelineCover.js'
import HeaderSearch from '../../components/HeaderSearch.js';
import TimelineCoverButton from '../../screens/ProfileScreens/TimelineCoverButton.js'

export default class ProfilePage extends Component {
  render(){
    return(
      <View>
        <HeaderSearch placeholder='Search' navigationsData = {this.props.navigation}/>
        <ScrollView>
          <TimelineCover />
          <TimelineCoverButton />
        </ScrollView>
      </View>
    )
  }
}