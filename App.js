import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignupPage from './src//screens/SignupPage'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <View style={{flex : 1 , justifyContent : "center"}}>
      <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
    </Stack.Navigator>
    </NavigationContainer>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})