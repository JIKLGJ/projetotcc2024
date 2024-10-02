
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

const ra = document.querySelector("#number1");
const senha = document.querySelector("#senha");
const digito = document.querySelector("#digito");

const botao = document.querySelector("#abrirModal");
const modal = document.querySelector("#modal");
var inputPass = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
var okButton = document.querySelector('#okButton');





async function POST() {
  const url = "https://urna-ec7a7-default-rtdb.firebaseio.com/alunos.json";
  
  const newData = {
    ra: ra.value,
    senha: senha.value,
    digito: digito.value
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) throw new Error('Erro ao enviar os dados');

    const data = await response.json();
    console.log(data);

    // Mude de tela após o envio dos dados
    window.location.href = "../../tela de bem vindo/tela de bem vindo.html";
  } catch (error) {
    console.error(error);
    modal.showModal(); // Mostra o modal se ocorrer um erro
  }
}


 

botao.addEventListener('click', () => {
  if (ra.value === '' || senha.value === '' || (ra.value !== '000108453230' || senha.value !== 'Al.2023#')) {
    modal.showModal(); // Mostra o modal se algum campo estiver vazio ou as credenciais estiverem incorretas
  } else  {
    POST(); 
  
  } 
  
});


  


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
    modal.close(); // Fecha o modal
  });

  bntShowpass.addEventListener('click', mostrarSenha); // Adiciona escuta para mostrar/ocultar a senha
});
