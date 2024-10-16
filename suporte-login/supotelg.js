import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbQH9lRIEfYeXGA92QWVIkZ0No6-5xrio",
  authDomain: "urna-ec7a7.firebaseapp.com",
  databaseURL: "https://urna-ec7a7-default-rtdb.firebaseio.com",
  projectId: "urna-ec7a7",
  storageBucket: "urna-ec7a7.appspot.com",
  messagingSenderId: "153920023241",
  appId: "1:153920023241:web:35473099846372372ffb18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const ra = document.querySelector("#ra");
const email = document.querySelector("#email");
const assunto = document.querySelector("#Assunto");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#enviar");
var okButton = document.querySelector('#okButton');
const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
var okButton2 = document.querySelector('#okButton2');

// Função POST corrigida (continua igual)
async function POST() {
  const url = "https://urna-ec7a7-default-rtdb.firebaseio.com/suporte.json";
  
  const newData = {
    ra: ra.value,
    email: email.value,
    mensagem: mensagem.value,
    assunto: assunto.value
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Verificar se os campos estão preenchidos e se as credenciais estão corretas
botao.addEventListener('click', () => {
  if (ra.value === '' || email.value === '' || assunto.value === '' || mensagem.value === '') {
    modal.showModal(); 
  } else if (isNaN(ra.value)) {
    modal.showModal(); 
  } else if (ra.value.length < 9) {
    modal.showModal(); 
  } else if (!email.validity.valid) {
    modal.showModal();
  } else {
    modal2.showModal();
    POST(); // Chamar função POST se os dados estiverem corretos
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Fechar o primeiro modal
  okButton.addEventListener('click', () => {
    modal.close();
  });

  // Fechar o segundo modal corretamente
  okButton2.addEventListener('click', () => {
    modal2.close(); // Correção: agora fecha o modal2, não o modal
  });
});
