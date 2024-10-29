import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {getDatabase, ref, set, push  } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

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
const db = getDatabase(app);

const ra = document.querySelector("#number1");
const senha = document.querySelector("#senha");

const botao = document.querySelector("#botao");
const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
const inputPass = document.getElementById('senha');
const bntShowpass = document.querySelector('#bnt-senha');
const okButton = document.querySelector('#okButton');
const okButton2 = document.querySelector('#okButton2');

botao.addEventListener("click", async () => {
  if (ra.value === '' || senha.value === '' || ra.value.length < 9 || senha.value.length < 6) {
    modal.showModal(); // Show modal if fields are empty or incorrect
  } else if (isNaN(ra.value)) {
    modal.showModal(); // Show modal if RA is not numeric
  } else {
    await updateItemByRa(ra.value, { senha: senha.value }); // Passa ra.value e a nova senha
    modal2.showModal();
  }
});

// Função para atualizar o item pelo RA
const updateItemByRa = async (ra, data) => {
  const itemsRef = collection(db, 'cadastro'); // Referência à coleção 'cadastro'
  try {
      const snapshot = await getDocs(itemsRef); // Obtém todos os documentos
      let foundDoc = null;

      // Percorre os documentos para encontrar pelo RA
      snapshot.forEach((doc) => {
          if (doc.data().ra === ra) {
              foundDoc = doc; // Salva o documento encontrado
          }
      });

      if (foundDoc) {
          // Atualiza os dados do documento encontrado
          await updateDoc(doc(db, 'cadastro', foundDoc.id), data);
          console.log('Documento atualizado com sucesso!');
      } else {
          console.log('Nenhum documento encontrado com o RA:', ra);
      }
  } catch (error) {
      console.error('Erro ao atualizar documento: ', error);
  }
};

function mostrarSenha() {
  if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    bntShowpass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    bntShowpass.style.opacity = 1;
  } else {
    inputPass.setAttribute('type', 'password');
    bntShowpass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    bntShowpass.style.opacity = 0.5;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  okButton.addEventListener('click', () => {
    modal.close();
  });

  okButton2.addEventListener('click', () => {
    modal2.close();
  });

  bntShowpass.addEventListener('click', mostrarSenha); // Adicionando o evento para mostrar a senha
});
