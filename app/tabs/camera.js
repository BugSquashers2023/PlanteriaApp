import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [pictureUri, setPictureUri] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const cameraRef = useRef(null);

  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPictureUri(data.uri);
      setPlantInfo({ name: 'Monstera Deliciosa', state: 'Good Moisture', info: 'Monstera Deliciosa prefers bright, indirect light but can also tolerate low light. Water your Monstera when the top 1-2 inches of soil feels dry.' });
    }
  };

  const handleSeeMore = () => {
    // prompt for user to answer yes or No
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {pictureUri === null ? (
        <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCameraType}>
              <Ionicons name="camera-reverse-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
              <Ionicons name="camera-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <View style={styles.pictureContainer}>
          <View style={styles.pictureHeader}>
            <Text style={styles.pictureHeaderText}>Plant Scan Success</Text>
            <TouchableOpacity style={styles.button} onPress={() => setPictureUri(null)}>
              <Ionicons name="close-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.pictureInfoContainer}>
            <Image source={{ uri: pictureUri }} style={styles.picture} />
            {plantInfo ? (
              <>
                <Text style={styles.plantNameLabel}>Plant Name :</Text>
                <Text style={styles.plantName}>{plantInfo.name}</Text>
                <Text style={styles.plantStateLabel}>Status :</Text>
                <Text style={styles.plantState}>{plantInfo.state}</Text>
                <Text style={styles.info}>{plantInfo.info}</Text>
                <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMore}>
                  <Text style={styles.seeMoreText}>See more information about this plant</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.noPlantInfo}>No plant information found</Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
   
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginHorizontal: 20,
  },
  pictureContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  pictureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pictureHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  pictureInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomColor:'Grey',
  },
  picture: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  plantName: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
    marginLeft: 200,
    bottom:35
  },
  plantNameLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    
  },
  plantStateLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  plantState: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    marginLeft: 200,
    bottom:35
  },
  seeMoreButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 30,
    borderRadius: 5,
  },
  seeMoreText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noPlantInfo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CameraScreen;
