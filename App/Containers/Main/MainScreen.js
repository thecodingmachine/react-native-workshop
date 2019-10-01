import React from 'react'
import { SectionItem } from 'App/Components/SectionItem'
import { SectionList, View, Image, Text, ScrollView } from 'react-native'
import { Images, Helpers, Metrics } from 'App/Theme'
import Style from './MainScreenStyle'

/**
 * all screen as to be added into the right section
 * in order to be displayed into the application
 */
const MENU = [
  {
    title: 'Examples code',
    data: [
      {
        title: 'Simple redux with saga example',
        screen: 'ExampleScreen',
      },
      {
        title: 'Session authentication example',
        screen: 'NotImplementedScreen',
      },
    ],
  },
  {
    title: 'Experiments',
    data: [
      {
        title: 'gradient experiment',
        screen: 'NotImplementedScreen',
      },
      {
        title: 'Shadow experiment',
        screen: 'NotImplementedScreen',
      },
      {
        title: 'Navbar custom',
        screen: 'NotImplementedScreen',
      },
    ],
  },
  {
    title: 'Animations',
    data: [
      {
        title: 'Shake inputs on error',
        screen: 'NotImplementedScreen',
      },
    ],
  },
]

/**
 * This is the first Screen displayed in the app
 * This screen displays all examples you will find in the app.
 */
const MainScreen = () => (
  <View style={[Helpers.colMain, Helpers.fill]}>
    <View style={[Helpers.fullWidth, Style.logoContainer]}>
      <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
    </View>
    <ScrollView contentContainerStyle={[Helpers.fill]}>
      <SectionList
        stickySectionHeadersEnabled={true}
        sections={MENU}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <SectionItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={[
              Helpers.fill,
              Metrics.tinyHorizontalPadding,
              Metrics.tinyVerticalPadding,
              Style.highlight,
            ]}
          >
            <Text>{title}</Text>
          </View>
        )}
      />
    </ScrollView>
  </View>
)

export default MainScreen
