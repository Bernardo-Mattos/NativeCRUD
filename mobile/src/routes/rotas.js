import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "../pages/Login/login";

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="Main"> 
      <Stack.Screen name="Main" component={Login} />
    </Stack.Navigator>
  );
}
