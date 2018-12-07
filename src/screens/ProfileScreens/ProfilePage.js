import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import HeaderTitle from './HeaderTitle.js'
import TimelineCover from './TimelineCover.js'
import HeaderSearch from '../../components/HeaderSearch.js';
export default class ProfilePage extends Component {
  render(){
    return(
      <View>
        <HeaderSearch placeholder='Search' navigationsData = {this.props.navigation}/>
        <ScrollView>
          <TimelineCover />
        </ScrollView>
      </View>
    )
  }
}