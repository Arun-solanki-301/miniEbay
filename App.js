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
import Icon from "react-native-vector-icons/FontAwesome";

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
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#1a73e8',
      inactiveTintColor: '#fff',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#1a73e8',
   }}
   screenOptions={{
    headerStyle: {
        backgroundColor: "#fff",
    },
    headerTintColor: '#1a73e8',
    headerTitleStyle: {
        fontSize: 17
    }
}}
   >
      <Tab.Screen name="Home" component={Home} 
      options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused}) => {
        const color = focused ? "#1a73e8" : "#fff"
        return(
      <Icon name="home" color={color} size={25} />
        )
      },
    }}/>
      <Tab.Screen name="CreatePost" component={CreatePost} options={{
      tabBarLabel: 'Create Posts',
      tabBarIcon: ({ focused}) => {
        const color = focused ? "#1a73e8" : "#fff"
        return(
      <Icon name="plus" color={color} size={25} />
        )
      },
    }} />
      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused}) => {
        const color = focused ? "#1a73e8" : "#fff"
        return(
      <Icon name="users" color={color} size={25} />
        )
      },
    }}/>
    </Tab.Navigator>
  )
}