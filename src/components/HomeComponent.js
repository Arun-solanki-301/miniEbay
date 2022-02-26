import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';

const HomeComponent = (props) => {
  const { imageUrl , publicOrPrivate } = props;
  const [urlState, setUrl] = useState('')

  const imagesUrl = async (imageName) => {
    try {
      const url = await storage().ref('/' + imageName).getDownloadURL()
      console.log(url)
      setUrl(url)
      return url;
    } catch (e) {
      console.log(e, "error")
    }
  }

  useEffect(() => {
    imagesUrl(imageUrl)
  }, [imageUrl])

  console.log("prpublicOrPrivate" , publicOrPrivate)

  return (
    <View>
      {publicOrPrivate ? null :
      <View>
        <Image style={{ height: 500, display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 20 }} source={{ uri: urlState }} />
        {/* <View style={styles.commentSection}>
            <TextInput placeholder='comment here' style={styles.commentSectionInput} />
            <TouchableOpacity style={styles.signUpOnLogin}>
                <Text style={styles.signUpOnLoginText}>send</Text>
            </TouchableOpacity>
            </View> */}
      </View>}
    </View>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
  commentSection: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15
  },
  commentSectionInput: {
    width: '80%'
  },
  signUpOnLogin: {
    backgroundColor: "#1a73e8",
    paddingHorizontal: 10,
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
})