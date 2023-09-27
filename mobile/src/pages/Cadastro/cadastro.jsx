import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import firebase from "firebase/app";
import db from "../../config/firebase.config";
import { useState } from "react";

export default function Cadastro({navigation}) {
  const [name , setName ] = useState('');
  const [age , setAge ] = useState('');
  const [email , setEmail ] = useState('');
  
  const handleSignUp = () => {
    console.log("Dados de cadastro:", { name, email, age });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.ttl}>cadastro page</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Name" onChangeText={(text) => setName(text)}/>
        <TextInput style={styles.input} placeholder="Age" onChangeText={(text) => setAge(text)}/>
        <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSignUp}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
  },
  ttl: {
    color: "#fff",
  },
  containerInput: {
    padding: 20,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,
    height: 55,
    marginTop: 10,
    padding: 15,
  },
});
