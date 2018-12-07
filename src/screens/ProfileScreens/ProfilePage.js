import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import HeaderTitle from './HeaderTitle.js'

export default class ProfilePage extends Component {
  render(){
    return(
      <View>
        <HeaderTitle placeholder='Search' />
      </View>
    )
  }
}
