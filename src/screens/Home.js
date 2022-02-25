import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, {useEffect , useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';

const Home = () => {
  const [imageUrl , setImageUrl] = useState("")
  useEffect(() => {
    storage()
      .ref('/' + '15c39174-9a85-4c1b-8a2f-3b73eb4ec6a3.jpg') //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }, []);

  return (
    <View>
      <View>
          <Image style={{height : 200, width :"100%"}} source={{uri : imageUrl}} />
            <View style={styles.commentSection}>
            <TextInput placeholder='comment here' style={styles.commentSectionInput} />
            <TouchableOpacity style={styles.signUpOnLogin}>
                <Text style={styles.signUpOnLoginText}>send</Text>
            </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    commentSection : {
        display : "flex",
        justifyContent : "space-between",
        flexDirection : "row",
        alignItems:  "center",
        marginHorizontal : 15
    },
    commentSectionInput :{
        width : '80%'
    },
    signUpOnLogin: {
        backgroundColor:"#1a73e8",
        paddingHorizontal : 10,
      },
      signUpOnLoginText: {
        fontSize: 15,
        color: "#fff",
        textAlign :"center"
      },
})