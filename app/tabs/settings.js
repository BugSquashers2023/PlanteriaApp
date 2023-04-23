import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import CustomInput from "../customs/CustomInput/CustomInput";
import Ionicons from '@expo/vector-icons/Ionicons';

const Settings = () => {
    return(
        <ScrollView style={{flex: 1, alignContent: 'center',marginTop: 30, backgroundColor: "white"}}>
            <View style={styles.profileContainer}>
                <Image 
                    source={require('../../assets/images/plantImage.jpg')}
                    style={{width: 120, height: 120, borderRadius: 100}}
                />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Edit <Ionicons name="create-outline" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {marginTop: 20}]} >
                    <Text style={styles.buttonText}>Log Out <Ionicons name="log-out-outline" /></Text>
                </TouchableOpacity>

            </View>
            <View style={styles.personalDetail}>
                <Text style={{margin: 8, alignSelf: 'center', fontWeight: 'bold'}}>Personal Details</Text>
                <View>
                    <TextInput
                        style={styles.input}                     
                        secureTextEntry
                        placeholder="user name"
                    />
                    <TextInput
                        style={styles.input}                     
                        secureTextEntry
                        placeholder="last name"
                    />
                    <TextInput
                        style={styles.input}                     
                        secureTextEntry
                        placeholder="phone number"
                    />
                    <TextInput
                        style={styles.input}                     
                        secureTextEntry
                        placeholder="password"
                    />
                    <TouchableOpacity style={styles.detailButton}>
                        <Text style={styles.buttonText}>Update <Ionicons name="create-outline" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.detailButton}>
                        <Text style={styles.buttonText}>Delete Account <Ionicons name="create-outline" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        padding: '2%',
        width: '90%',
        marginTop: '5%',
        marginLeft:'auto',
        marginRight: 'auto',
        borderRadius: 12,
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#F4F4F4",
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        // paddingLeft: 'auto',
        // paddingRight: 'auto',
        marginTop: 2,
        width: '50%',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white', 
        fontWeight: 'bold',
        margin: 2,
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20,
        paddingHorizontal: 10,     
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginBottom: '5%',
        alignSelf: 'center',
    },
    personalDetail: {
        backgroundColor: "#F4F4F4",
        padding: '5%',
        width: '90%',
        borderRadius: 12,
        backgroundColor: "#F4F4F4",
        marginTop: '5%',
        marginLeft:'auto',
        marginRight: 'auto',

    },
    detailButton:{
        alignSelf: 'center',
        justifyContent:'center',
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 8,
        width: '90%',
        height: '10%',
        textAlign: 'center',
    }
});

export default Settings;