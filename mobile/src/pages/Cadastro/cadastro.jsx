import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
} from "react-native";
import { useState } from "react";
import saveCadastroData from "../../config/firebase.config";

export default function Cadastro({navigation}) {
  // gera um delay em algumas functions
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [name , setName ] = useState('');
  const [age , setAge ] = useState('');
  const [email , setEmail ] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  const  handleSignUp = async () => {
    saveCadastroData(name , age , email);
    await delay(2000);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login Page</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSignUp}>
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.ttl}>cadastro page</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Name" onChangeText={(text) => setName(text)}/>
        <TextInput style={styles.input} placeholder="Age" onChangeText={(text) => setAge(text)}/>
        <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
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

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 1,
  },
  buttonOpen: {
    backgroundColor: '#888',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
