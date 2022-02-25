import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View>
      <View>
          <Image style={{height : 200, width :"100%"}} source={{uri : "https://upload.wikimedia.org/wikipedia/commons/a/a7/Post_Box_of_India.jpg"}} />
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