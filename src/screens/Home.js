import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React, {useEffect , useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import storage from '@react-native-firebase/storage';
import database, { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import HomeComponent from '../components/HomeComponent';

const Home = () => {
  const [imageUrl , setImageUrl] = useState([])
  // const [imageUrl1 , setImageUrl1] = useState('')
  useEffect(() => {
    getDataFromFireStore();
  }, []);


  const getDataFromFireStore = async () => {
    const usersCollection = firestore().collection('Users');
    const res = await usersCollection.get()
    res.forEach((rest)=>{
    imagesUrl(rest?._data?.imageName)
    })
}

const imagesUrl = async (getimages) =>{
    try{
      const url = await storage().ref('/' + getimages).getDownloadURL()
      setImageUrl([...imageUrl , url ]) 
  }catch(e){
    console.log(e , "error")
  }
}

useFocusEffect(
        useCallback(()=>{
          getDataFromFireStore()
        },[])
    )


  return (
    <ScrollView>
      {
        imageUrl?.map((item , i)=>{
           return <HomeComponent imageUrl={item} key={i}/>
        })
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})