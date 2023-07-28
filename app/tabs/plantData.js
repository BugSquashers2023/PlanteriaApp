import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
import { FlashMode } from 'expo-camera';

const PlantData = () => {

  const video= React.useRef(null);
  const [status,setStatus]= useState({});
  const [statusSecond,setStatusSecond]= useState({});

  const data = [
    {name: "Tomato", content: "Tomato is a tropical fruit that is cultivated in tropical climates. Tomatoes are commonly grown in tropical climates.", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FTomatoes.jpg?alt=media&token=20e44059-adbb-41a8-8fd7-2f4a1dd5cf20"},

    {name: "Beetroot", content: "Sow the seeds 10cm apart, then cover with about 2.5cm of compost. then water it regularly", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FBeetroot.jpg?alt=media&token=d846e42b-7548-4485-a052-05f9b8de14f6"},

    {name: "Cabbage", content: "Cabbages are heavy feeders and need a good deal of compost dug into the planting area before planting.Make sure the soil is well-draining, if the roots stand in water, it could cause the head to split and rot.From seed, cabbages take 60-100 days to mature into well formed heads that are ready for harvest.", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FCabbagejpg.jpg?alt=media&token=62d9288b-4b17-4ddf-a7d2-31ec0ac76c2d"},

    {name: "Carrots", content: "We recommend sowing seeds directly in the garden (or wherever you plan to grow them) rather than transplanting.Carrots do not like to have their roots disturbed. Sow 1/4 inch deep, 2 to 3 inches apart in rows 1 foot apart.Tip: Try to distribute seed in an even fashion so that seeds don't grow together. The best months to grow them is between April and July. Days to Harvest: 55-80 days, depending on variety.", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FCarrotsjpg.jpg?alt=media&token=ddab8e42-93a6-43c6-85fa-a344f6ba72b2"},

    {name: "Potatoes", content: "Dig straight, shallow trenches, 2 to 3 feet apart, in prepared soil. Plant seed potatoes 12 inches apart, and cover with about 3 inches of soil. When the shoots reach 10 to 12 inches tall, use a hoe or shovel to scoop soil from between rows and mound it against the plants, burying the stems halfway", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FPotatoes.jpg?alt=media&token=1880f78c-f22f-4e47-bb68-7ca263a8a171"},

    {name: "Oranges", content: "To grow oranges we need sunlight, water, and good cultural practices such as fertilizers and pruning. Our trees also like about 30 days of 32 degree temperature to help maintain the firmness and freshness of the fruit. The cooler temperatures limit leaf growth aiding in the ripening and longevity of the fruit.", image: "https://firebasestorage.googleapis.com/v0/b/mypractice-252dc.appspot.com/o/Images%2FOrangesjpg.jpg?alt=media&token=a3d92a3d-427c-4582-a5ad-8dbb765de8e1"},
  ]

  return (
    <View style={{flex: 1, marginTop: 15}}>
      {/* <Text style={{marginTop: 25, marginLeft: "auto", marginRight: "auto", fontSize: 19}}>plants Information</Text> */}
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image source={{ uri: item.image}} style={styles.plantImage}/>
            <Text style={{fontSize: 20, padding: 8, color: "green"}}>{item.name}</Text>
            <Text style={{paddingLeft: 8, paddingRight: 8, paddingBottom: 8}}>{item.content}</Text>
          </View>
        )}
      />
    </View>
); 
}

const styles = StyleSheet.create({
  plantImage:{
    width: "100%",
    height: 170,
    borderRadius: 8
  },
  container:{
    marginTop: 25,
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#FFFDD0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
});

export default PlantData;

