import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';

const CreatePost = () => {
  const reference = storage().ref('images');

  const storeImage = async () =>{
    console.log("imagestore.png")
    await reference.putFile("C:\Users\Etech\Downloads\frame.png/imagestore.png");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signUpOnLogin} onPress={storeImage}>
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