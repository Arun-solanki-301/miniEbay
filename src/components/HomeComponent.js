import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';

const HomeComponent = (props) => {
  const { imageUrl , publicOrPrivate, item } = props;
  const [urlState, setUrl] = useState('')

  const imagesUrl = async (imageName) => {
    try {
      const url = await storage().ref('/' + imageName).getDownloadURL()
      console.log(url)
      setUrl(url)
    } catch (e) {
      console.log(e, "error")
    }
  }

  useEffect(() => {
    imagesUrl(imageUrl)
  }, [imageUrl])

  console.log("prpublicOrPrivate" , item)

  return (
    <View style={{marginBottom:16,paddingHorizontal:15,marginTop:16}}>
      {publicOrPrivate ? null :
      <View>
        <Image style={{ height: 500, display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 20,borderRadius:5 }} source={{ uri: urlState }} />
        {item?.description && <View>
          <Text style={{fontWeight:'600',fontSize:22,letterSpacing:1,textTransform:'capitalize',color:'#1a73e8'}}>{item?.description?.title}</Text>
          <Text style={{fontSize:18,paddingVertical:2}}>₹ {item?.description?.rate}</Text>
          <Text>
            Description : 
            </Text>
          <Text>         
            {item?.description?.description}
            </Text>
        </View>}
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