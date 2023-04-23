import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import image from '../../assets/images/plantImage.jpg';
//import SignUpScreen from './signUpScreen';
import CustomInput from '../customs/CustomInput/CustomInput';
import CustomButton from '../customs/CustomButton/CustomButton';
import SocialSignInButtons from '../customs/SocialSignInButtons/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user then open the app(tabs)
    navigation.navigate('tabContainer');
    
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('forgotPasswordScreen');
  };

  const onSignUpPress = () => {
    //here..
    //router.push('SignUpScreen');
    navigation.navigate('signUpScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={image}
          style={[styles.image, {height: height * 0.3}]}
          resizeMode="cover"         
        />

        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
         
        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    marginTop: 40,
    borderRadius: 10,
  },
});

export default SignInScreen;
