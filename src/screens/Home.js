import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, {useEffect , useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';
import database, { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import HomeComponent from '../components/HomeComponent';

const Home = () => {
  const [imageUrl , setImageUrl] = useState('')
  useEffect(() => {
    getDataFromFireStore();
  }, []);


  const getDataFromFireStore = async () => {
    const usersCollection = firestore().collection('Users');
    const res = await usersCollection.get()
    res.forEach((rest)=>{
      // setImageUrl(rest)
      // console.log(rest?._data?.imageName)
      // setImageUrl(rest?._data?.imageName)
      setImageUrl(rest?._data?.imageName)
      
    })
}

const imagesUrl = async (getimages) =>{
    try{
      const url = await storage().ref('/' + getimages).getDownloadURL()
      setImageUrl(url)
      
  }catch(e){
    console.log(e , "error")
  }
}



  return (
    <View>
      <HomeComponent imageUrl={imageUrl} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})