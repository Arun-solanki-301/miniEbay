import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, {useEffect , useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const HomeComponent = (props) => {
  return (
    <View>
       <View>
          <Image style={{height : 200, display:"flex", flexDirection : "row", justifyContent : "center"}} source={{uri : props.imageUrl}} />
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

export default HomeComponent

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