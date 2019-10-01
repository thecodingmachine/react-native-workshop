import React from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { Helpers } from 'App/Theme'

const RootScreen = () => (
  <View style={Helpers.fill}>
    <AppNavigator
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  </View>
)

export default RootScreen
