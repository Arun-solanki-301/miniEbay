import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './screens/LoginPage'
import SignupPage from './screens/SignupPage'

const App = () => {
  return (
    <View style={{flex : 1 , justifyContent : "center"}}>
     {/* <LoginPage /> */}
     <SignupPage />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})