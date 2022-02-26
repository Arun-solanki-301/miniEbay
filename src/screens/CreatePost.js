import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

// const usersCollection = firestore().collection('Users');

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading , setIsImageLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const [imgName , setImgName] = useState("");
  const [imagePath , setImagePath] = useState("")
  console.log(isImageLoading , "guaskhfkjnvsidghnkasgvniusgdnvjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
  const [desc, setDesc] = useState({
    title: "",
    description: "",
    rate : ""
  })
  
  const handleFields = (value, key) => {
    setDesc({
      ...desc,
      [key]: value
    })
  }

  const pickImage = async () => {
    setIsImageLoading(true);
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
      setImgName(fileName);
      setImagePath(image)

    } catch (e) {
      setIsImageLoading(false)
      console.log(e, '::ERROR')
    }
  }

  const sendDetails = async () => {
    setIsLoading(true);
      try {
      if(desc.title && desc.description && desc.rate){
      const reference = storage().ref(`${imgName}`);
      let task = await reference.putFile(`${imagePath.path}`);

      const postDocument = await firestore().collection('Posts').add({imageName :task.metadata.name , private : isEnabled , description : desc });
      console.log(imagePath, '________________', task , postDocument)
      }
      setDesc({
        ...desc,
        title: "",
        description: "",
        rate : ""
      })
      setIsLoading(false);
      setIsImageLoading(false)
      } catch (error) {
        setIsLoading(false);
        console.log(error , "error in send details")
      }
  }

  return (
    <View style={styles.container}>
      
      <View>
      <TextInput
        style={styles.textInput}
        placeholder='Title'
        value={desc.title}
        onChangeText={(e) => handleFields(e, "title")}
      />
      <TextInput
        style={styles.textInput}
        placeholder='descriptions'
        value={desc.description}
        onChangeText={(e) => handleFields(e, "description")}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Rate'
        value={desc.rate}
        onChangeText={(e) => handleFields(e, "rate")}
      />
      </View>
      <View style={styles.switchContainer}>
        <Text>private mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={()=>setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
      </View>
      <TouchableOpacity style={styles.signUpOnLogin} onPress={pickImage} disabled={isImageLoading}>
        <Text style={styles.signUpOnLoginText}>{isImageLoading ? "image selected" : "select Image"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendBtn} onPress={sendDetails}>
        <Text style={styles.signUpOnLoginText}>{isLoading ? "Please wait" : "post"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "100%"
    marginHorizontal : 10
  },
  switchContainer :{
    display :"flex",
    alignItems :"flex-start"
  },
  signUpOnLogin: {
    backgroundColor: "#1a73e8",
    padding: 15,
    marginVertical : 10
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#1a73e8",
    borderRadius: 5,
    marginVertical: 5
  },
  sendBtn :{
    backgroundColor: "#1a73e8",
    padding: 15,
    marginVertical :15
  }
})