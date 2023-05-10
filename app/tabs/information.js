import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image,Pressable, Alert } from 'react-native';
import { useNavigation } from 'expo-router';


const Information = () => {

  const data = [
    {id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nRTcZUacQz5aHuUV8f63NbnL0Fwp8R2OF85W484g&s', name: 'potatoes', date: '17/09/2023'},
    {id: 2, image: 'https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=2owPswip', name: 'tomato', date:'12/04/2023'},
    {id: 3, image: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg', name: 'apple', date:'07/11/2023'},
    {id: 4, image: 'https://www.bhg.com/thmb/6rIelAqQ0mz4y9Oh9atnJ0Ak5W8=/550x0/filters:no_upscale():strip_icc()/HGL100647-773e4b92753344f2b4c89f551de5d87b.jpg', name: 'cabbage', date:'25/01/2023'},
    {id: 5, image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/02/health_benefits_carrots_732x549_thumb.jpg', name: 'carrots', date:'15/03/2023'},
    {id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEdJyhtAaXQfnP7ek7CYAH7seJbnJADAHMLF3YFMrHg&s', name: 'spinach', date:'01/09/2023'},
  ]

  const navigation = useNavigation();

  const openImage = (e, plantName, plantDate, plantImage) => {
    e.preventDefault();
    navigation.navigate('modelScreen', {plantName, plantDate, plantImage})
  }

  return (

    <View style={{flex: 1, marginTop: 40}}>       

        <FlatList 
          data={data}
          renderItem={({item}) =>(
            <Pressable onPress={(e) => openImage(e, item.name, item.date, item.image)} style={myStyles.container}>
              <Image source={{ uri: item.image }} style={myStyles.image} />

              <View style={myStyles.textStyle}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.name}</Text>
                <Text >{item.date}</Text>
              </View>             
            </Pressable>
          )}
        />

    </View>
  )
}

const myStyles = StyleSheet.create({
  image: {
      width: 80,
      height: 80,
      borderRadius: 50,
  },
  container: {
      width: '90%',
      display: 'flex',
      backgroundColor: '#FFFFFF',
      marginTop: '1%',
      marginLeft: 'auto',
      marginRight:'auto',
      borderRadius: 8,
      padding: '2%',
      flexDirection: 'row',
      
  },
  textStyle: {
      justifyContent: 'center',
      marginLeft: '10%',
  },
  headerText: {
      textAlign: 'center',
      fontSize: 15,
      color: 'green',
      fontWeight: '500',
  }
})

export default Information
