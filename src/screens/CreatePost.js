import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

// const usersCollection = firestore().collection('Users');

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);
    console.log("pickImageFunction")
    try {
      console.log("pickImageFunction TRY BLOCK")
      let image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      })
      let fileNameArray = image.path.split("/")
      let fileName = `${fileNameArray[fileNameArray.length - 1]}`
      console.log(fileName, '::fileName')
      const reference = storage().ref(`${fileName}`);
      let task = await reference.putFile(`${image.path}`);

      const userDocument = await firestore().collection('Users').add({imageName :task.metadata.name , public : false});
      console.log(image, '________________', task , userDocument)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e, '::ERROR')
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signUpOnLogin} onPress={pickImage} disabled={isLoading}>
        <Text style={styles.signUpOnLoginText}>{isLoading ? "Please wait" : "Create Post"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  signUpOnLogin: {
    backgroundColor: "#1a73e8",
    padding: 15
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
})