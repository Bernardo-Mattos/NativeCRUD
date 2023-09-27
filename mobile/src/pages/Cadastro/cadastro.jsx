import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import saveCadastroData from "../../config/firebase.config";
import { FontAwesome } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
  // gera um delay em algumas functions
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = async () => {
    saveCadastroData(name, age, email);
    await delay(100);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Usuario cadastrado com sucesso !
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSignUp}
            >
              <Text style={styles.textStyle}>Logar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.containerInput}>
        <FontAwesome name="user" size={100} color="#293233" />

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Cadastrar</Text>
      </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E8E5Da",
  },
  ttl: {
    color: "#fff",
  },
  containerInput: {
    padding: 20,
    width: "80%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    top:50,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    height: 55,
    marginTop: 10,
    padding: 15,
  },

  modalView: {
    margin: 20,
    top:'' ,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 1,
  },
  buttonOpen: {
    backgroundColor: "#293233",
    top: 20,
  },
  buttonClose: {
    backgroundColor: "#243625",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#243625",
  },
});
