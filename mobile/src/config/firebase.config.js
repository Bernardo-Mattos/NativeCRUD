import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKT6ZB7E2wq5q8jKrEzRzkiTgICKYK4Mk",
  authDomain: "crud-8635e.firebaseapp.com",
  projectId: "crud-8635e",
  storageBucket: "crud-8635e.appspot.com",
  messagingSenderId: "828594749150",
  appId: "1:828594749150:web:81bc63db0ab77360c38c4f",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function saveCadastroData(name, age,  email) {
  const cadastroRef = ref(db, "Users"); // Nome da referência no banco de dados

  // Cria uma nova req com um ID gerado automaticamente
  const newCadastroRef = push(cadastroRef);

  // Define os dados do cadastro na req
  set(newCadastroRef, {
    name,
    age,
    email,
  })
    .then(() => {
      alert("Cadastro salvo com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao salvar o cadastro:", error);
      alert('algo deu de errado ao cadastrar o user')
    });
}
