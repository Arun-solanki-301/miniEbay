import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signUpOnLogin}>
          <Text style={styles.signUpOnLoginText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
    container:{
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        height : "100%"
    },
    signUpOnLogin: {
        backgroundColor : "#1a73e8",
        padding : 15
      },
      signUpOnLoginText: {
        fontSize: 15,
        color: "#fff",
        textAlign :"center"
      },
})