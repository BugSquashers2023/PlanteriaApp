import { Link } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { StyleSheet, Text, View } from "react-native";

import SignUpScreen from "./screens/signUpScreen";
import SignInScreen from "./screens/signInScreen";
import ForgotPasswordScreen from "./screens/forgotPasswordScreen";
import TabContainer from "./screens/tabContainer";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
  <Stack.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown:false }}>
    <Stack.Screen name="signInScreen" component={SignInScreen} />
    <Stack.Screen name="signUpScreen" component={SignUpScreen} />
    <Stack.Screen name="forgotPasswordScreen" component={ForgotPasswordScreen} />
    <Stack.Screen name="tabContainer" component={TabContainer} />
  </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});