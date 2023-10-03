import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

import "firebase/database";
import { Alert, Modal } from "react-native";

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

export default function saveCadastroData(name, age, email) {
  const cadastroRef = ref(db, "Users"); // Nome da referência no banco de dados

  // Verifica se os campos estão preenchidos
  if (!name || !age || !email) {
    return false; // Retorna false quando os campos não estão preenchidos
  }

  // Cria uma nova req com um ID gerado automaticamente
  const newCadastroRef = push(cadastroRef);

  // Define os dados do cadastro na req
  set(newCadastroRef, {
    name,
    age,
    email,
  }).then(() => {
    console.log("Usuário cadastrado");
  }).catch((error) => {
    console.error("Erro ao cadastrar usuário:", error);
  });

  return true; // Retorna true quando o cadastro é bem-sucedido
}