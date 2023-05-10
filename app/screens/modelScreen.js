import { View, Text, Modal, Image, StyleSheet } from "react-native";

const ModelSecreen = ({ route, navigation }) => {
    const{plantName, plantDate, plantImage} = route.params;
    return(
        <View style={{flex: 1, marginTop: 40}}>
            <Image source={{ uri: plantImage }} style={myStyles.image}/>
            <View style={myStyles.Container}>
                <Text style={myStyles.header}>Name: {plantName}</Text>
                <Text style={myStyles.header}>Date: {plantDate}</Text>
                <Text style={myStyles.dataAPI}>It will show data about the image from the API.</Text>
            </View>
            
        </View>
    )
}
const myStyles = StyleSheet.create({
    image: {
        width: "90%",
        height: "50%",
        marginLeft: "auto",
        marginRight:"auto",
        borderRadius: 8
    },
    Container:{
        borderRadius: 4,
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        backgroundColor: "grey",
        padding: 3,
        backgroundColor: "white"
    },
    header:{
        fontSize: 20,
        color: "green",
        marginBottom: 2,
    },
    dataAPI:{
        marginTop: 8,
    }
})

export default ModelSecreen;