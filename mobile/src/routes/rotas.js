import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
// pages
import Login from "../pages/Login/login";
import Cadastro from "../pages/Cadastro/cadastro";
import Users from "../pages/User/user";

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="Main"> 
      <Stack.Screen name="Main" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}
