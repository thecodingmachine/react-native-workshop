import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { Helpers, Metrics } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { PropTypes } from 'prop-types'

export const SectionItem = ({ item }) => (
  <TouchableNativeFeedback onPress={() => NavigationService.navigate(item.screen)}>
    <View
      style={[
        Helpers.fillRow,
        Helpers.mainSpaceBetween,
        Metrics.horizontalPadding,
        Metrics.verticalPadding,
      ]}
    >
      <Text>{item.title}</Text>
      <Text>{'>'}</Text>
    </View>
  </TouchableNativeFeedback>
)

SectionItem.propTypes = {
  item: PropTypes.object,
}
