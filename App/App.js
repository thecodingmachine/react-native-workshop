import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'

const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootScreen />
    </PersistGate>
  </Provider>
)

export default App
