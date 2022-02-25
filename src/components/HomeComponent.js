import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeComponent = () => {
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

export default HomeComponent

const styles = StyleSheet.create({})