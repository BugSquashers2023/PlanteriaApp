import { View, Text, Dimensions, StyleSheet, ScrollView, Alert, FlatList, } from "react-native";
import CustomInput from "../customs/CustomInput/CustomInput";
import CustomButton from "../customs/CustomButton/CustomButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

const Graphs = () => {
    
    const plantsData = [
        {
            plantName: "Tomato",
            plantType:"Fruit",
            soilTemp: {min: 70, max: 85},
            nitrogen: {min: 50, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 65, max: 80}        
        },
        {
            plantName: "Carrots",
            plantType:"Veg",
            soilTemp: {min: 60, max: 70},
            nitrogen: {min: 50, max: 100},
            phosphorous: {min: 30 ,max: 60},
            potassium:{min: 75, max: 100}        
        },      
        {
            plantName: "Corn (Zea mays)",
            plantType: "Veg",
            soilTemp: {min: 60, max: 95},
            nitrogen: {min: 50, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Apple",
            plantType:"fruit",
            soilTemp: {min: 1, max: 18},
            nitrogen: {min: 4, max: 10},
            phosphorous: {min: 2 ,max: 7},
            potassium:{min: -38, max: -9}        
        },
        {
            plantName: "Orange",
            plantType:"Fruit",
            soilTemp: {min: 1, max: 15},
            nitrogen: {min: 19, max: 25},
            phosphorous: {min: 6 ,max: 10},
            potassium:{min: -38, max: 1}        
        },
        {
            plantName: "Lettuce (Lactuca sativa)",
            plantType:"Veg",
            soilTemp: {min: 1, max: 15},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 30 ,max: 50},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Potato (Solanum tuberosum)",
            plantType:"Veg",
            soilTemp: {min: 50, max: 70},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Beans (Phaseolus vulgaris)",
            plantType:"Veg",
            soilTemp: {min: 65, max: 85},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 30 ,max: 60},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Cucumber (Cucumis sativus)",
            plantType:"Veg",
            soilTemp: {min: 70, max: 95},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Spinach (Spinacia oleracea)",
            plantType:"Veg",
            soilTemp: {min: 35, max: 75},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 30 ,max: 50},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Onion (Allium cepa)",
            plantType:"Veg",
            soilTemp: {min: 45, max: 75},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 30 ,max: 50},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Bell Pepper (Capsicum annuum)",
            plantType:"Fruit",
            soilTemp: {min: 70, max: 85},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 75, max: 100}        
        },
        {
            plantName: "Pumpkin (Cucurbita pepo)",
            plantType:"Veg",
            soilTemp: {min: 70, max: 85},
            nitrogen: {min: 75, max: 100},
            phosphorous: {min: 50 ,max: 100},
            potassium:{min: 75, max: 100}        
        },
        
        

    ];
    const[temperature, setTemperature] = useState('');
    const[nitrogen, setNitrogen] = useState('');
    const[potessium, setPotessium] = useState('');
    const[phosphorus, setPhosphorus] = useState('');

    //const[plants, setPlants] = useState([]);
    //let plants = [];
    const[plants, setPlants] = useState([]);
    const[showRecommend, setShowRecommend] = useState(false);
    const[noPlants, setNoPlants] = useState(false);

    //error handle variables
    const[errorTemperature, setErrorTemperature] = useState('');
    const[errorNitrogen, setErrorNitrogen] = useState('');
    const[errorPotessiumm, setErrorPotessium] = useState('');
    const[errorPhosphorus, setErrorPhosphorus] = useState('');

    const onTemperatureChange = (text) => {
        setTemperature(text);
        setErrorTemperature('');
    }

    const onNitrogenChange = (text) => {
        setNitrogen(text);
        setErrorNitrogen('');
    }

    const onPotessiumChange = (text) => {
        setPotessium(text);
        setErrorPotessium('');
    }

    const onPhosphorusChange = (text) => {
        setPhosphorus(text);
        setErrorPhosphorus('')
    }

    const RecomendPlants = () => {
        // validate inputs from the user:
        

        if(!nitrogen){
            setErrorNitrogen('Nitrogen is required');
        }
        else if(!potessium){
            setErrorPotessium("Potessium is required");
        }
        else if(!phosphorus){
            setErrorPhosphorus('Phosphorous is required');
        }
        else{
            // now select suitable plants to crop for the criteria:
            plantsData.forEach((plant, index) => {
                if(plant.nitrogen.max >= nitrogen && plant.nitrogen.min <= nitrogen){
                    if(plant.phosphorous.max >= phosphorus && plant.phosphorous.min <= phosphorus){
                        if(plant.potassium.max >= potessium && plant.potassium.min <= potessium){
                            if(plant.soilTemp.max >= temperature && plant.soilTemp.min <= temperature){
                            }
                            plants.push(plant);
                            
                        }
                        //console.log("passed phosphorus");
                    }
                    //console.log("passed nitrogen");
                }
            })

            setShowRecommend(!showRecommend);
            
            console.log("item on plants:", plants.length);
            console.log(noPlants);

            if(!plants.length > 0){
                setNoPlants(true);
            }


        }
    }

    return(
        <View style={{flex: 1, marginTop: 35,}}>
            {!showRecommend ? (
            <ScrollView style={{width:"100%", marginBottom: 70}}>     
            <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: "auto", marginRight: "auto" }}>Crop Recommendation</Text>   

            <View style={styles.mainContainer}>

                <View style={styles.inputContainer}>
                    
                    {/* {!errorTemperature ? (<Text>Temperature</Text>) : (<Text style={{color: "red"}}>{errorTemperature}</Text>)}                    
                    <CustomInput
                        placeholder="plant name"
                        value={temperature}
                        setValue={onTemperatureChange}
                        error={errorTemperature}
                    /> */}

                    {!errorNitrogen ? (<Text>Nitrogen</Text>) : (<Text style={{color: "red"}}>{errorNitrogen}</Text>)}
                    <CustomInput
                        placeholder="nitrogen"
                        value={nitrogen}
                        setValue={onNitrogenChange}
                        error={errorNitrogen}
                    />

                    {!errorPotessiumm ? (<Text>Potessium</Text>) : (<Text style={{color: "red"}}>{errorPotessiumm}</Text>)}
                    <CustomInput
                        placeholder="potessium"
                        value={potessium}
                        setValue={onPotessiumChange}
                        error={errorPotessiumm}
                    />

                    {!errorPhosphorus ? (<Text>Phosphorus</Text>) : (<Text style={{color: "red"}}>{errorPhosphorus}</Text>)}
                    <CustomInput
                        placeholder="Phosphorus"
                        value={phosphorus}
                        setValue={onPhosphorusChange}
                        error={errorPhosphorus}
                    />

                    <View style={{marginLeft: "auto", marginRight: "auto", width: 200}}>
                        <CustomButton text="recommend plants" onPress={RecomendPlants} />
                    </View>
                    
                </View>

            </View>          
            </ScrollView>
            ) : (
                <ScrollView>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: "auto", marginRight: "auto" }}>Recommended Plants</Text>

                    {/* <FlatList 
                        data={plants} //for test mode
                        renderItem={({item, index}) => (
                            <View style={styles.itemStyle} key={index}>
                                <Text style={{ color: "green", fontSize: 19 }}>{item.plantName}</Text>
                                <Text>{item.plantType}</Text>
                            </View>
                        )}
                    /> */}

                    {plants.map((record, index) => {
                        return(
                            <View style={styles.itemStyle} key={index}>
                                <Text style={{ color: "green", fontSize: 19 }}>{record.plantName}</Text>
                                <Text>{record.plantType}</Text>
                                </View>
                        )
                    })}

                    {noPlants && <View style={styles.healthyBody}>
                        <Ionicons name="close-circle-outline" color="green" size={58}/>
                        <Text style={{color:"green"}}>No Plants found</Text>
                    </View>}

                    <View style={{marginLeft: "auto", marginRight: "auto", width: 200, marginBottom: 80}}>
                        <CustomButton text="Done" onPress={() => {
                            setShowRecommend(!showRecommend);
                            setPlants([]); 
                            setNoPlants(false);

                            //clear inputs field
                            setTemperature("");
                            setNitrogen("");
                            setPotessium("");
                            setPhosphorus("");
                        }} 
                        />
                    </View>
                    
                </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: "100%",       
    },
    mainContainer: {
        width: "90%",
        backgroundColor: "#E1E1E1",
        borderRadius: 8,
        padding: 12,
        marginTop: 25,
        marginLeft: "auto",
        marginRight: "auto",
    },
    itemStyle:{
        width: "90%",
        backgroundColor: "#E1E1E1",
        borderRadius: 8,
        padding: 12,
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
    },
    healthyBody:{
        marginTop: 90,
        alignContent:"center",
        alignItems:"center",
        marginBottom: 90,
      }
})

export default Graphs;