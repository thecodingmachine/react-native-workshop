import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainScreen from 'App/Containers/Main/MainScreen'
import NotImplementedScreen from 'App/Containers/NotImplemented/NotImplementedScreen'
import ExampleScreen from 'App/Containers/CodeExample/Examples/SimpleExample/SimpleExampleScreen'
import LoginBySessionScreen from 'App/Containers/CodeExample/Examples/LoginBySession/LoginBySessionScreen'

const StackNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    NotImplementedScreen: NotImplementedScreen,
    ExampleScreen: ExampleScreen,
    LoginBySessionScreen: LoginBySessionScreen,
  },
  {
    initialRouteName: 'MainScreen',
  }
)

export default createAppContainer(StackNavigator)
