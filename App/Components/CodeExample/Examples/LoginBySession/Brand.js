import React from 'react'
import { View, Image } from 'react-native'
import { Helpers, Images } from 'App/Theme'

const Brand = (props) => (
  <View style={[Helpers.fullWidth, { height: props.height || 100 }]}>
    <Image style={Helpers.fullSize} source={require('App/Assets/Images/TOM.png')} resizeMode={'contain'} />
  </View>
)

export default Brand
