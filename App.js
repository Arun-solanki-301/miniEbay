import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignupPage from './src//screens/SignupPage'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/screens/Profile';
import CreatePost from './src/screens/CreatePost';
import Home from './src/screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <View style={{flex : 1 , justifyContent : "center"}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: 'Test', headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="tabs" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})



const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      {/* <Tab.Screen name="Profile" component={Profile}/> */}
    </Tab.Navigator>
  )
}