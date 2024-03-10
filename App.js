import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store'
import Router from './src/Router/Router'
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <Provider
    store={store}
    >
      <Router/>
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App