import React from 'react'
import { ScrollView } from 'react-native'
import MainPage from './components/MainPage'

const App = () => {
  return (
    <ScrollView style={{marginTop: 20}}>
      <MainPage />
    </ScrollView>
  )
}

export default App