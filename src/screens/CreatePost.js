import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

// const usersCollection = firestore().collection('Users');

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);
    console.log("pickImageFunction")
    try {
      console.log("pickImageFunction TRY BLOCK")
      let image = await ImagePicker.openPicker({
        width: 400,
        height: 500,
        cropping: true
      })
      let fileNameArray = image.path.split("/")
      let fileName = `${fileNameArray[fileNameArray.length - 1]}`
      console.log(fileName, '::fileName')
      const reference = storage().ref(`${fileName}`);
      let task = await reference.putFile(`${image.path}`);

      const postDocument = await firestore().collection('Posts').add({imageName :task.metadata.name , private : isEnabled});
      console.log(image, '________________', task , postDocument)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e, '::ERROR')
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>private mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={()=>setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
      </View>
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