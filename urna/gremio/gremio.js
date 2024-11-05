import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbQH9lRIEfYeXGA92QWVIkZ0No6-5xrio",
  authDomain: "urna-ec7a7.firebaseapp.com",
  databaseURL: "https://urna-ec7a7-default-rtdb.firebaseio.com",
  projectId: "urna-ec7a7",
  storageBucket: "urna-ec7a7.appspot.com",
  messagingSenderId: "153920023241",
  appId: "1:153920023241:web:35473099846372372ffb18"
};


const confirmar=document.querySelector('#confirmar')
const btn120=document.querySelector('#btn-120')
const excluir=document.querySelector('#excluir')

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



btn120.addEventListener('click',function castVote() {
  const inputField = document.getElementById('candidato-numero');   
    inputField.value = 120;
    console.log("Clicou 120")
  })

  btn200.addEventListener('click',function castVote() {
    const inputField = document.getElementById('candidato-numero');   
    inputField.value = 200;
    console.log("Clicou 200")
  })

  btn150.addEventListener('click',function castVote() {
    const inputField = document.getElementById('candidato-numero');   
    inputField.value = 150;
    console.log("Clicou 150")
  })


// Função para adicionar o item 
const addItem = async (data) => {
    
    const newItemRef = ref(db, 'gremio');
    const newItemKey = push(newItemRef).key;

    try {
        await set(ref(db, `gremio/${newItemKey}`), data);
        console.log('Documento adicionado com ID: ', newItemKey);
       
       
       
    } catch (error) {
        console.error('Erro ao adicionar votação: ', error);
        alert('Erro na votação. Tente novamente.');
    }
};



confirmar.addEventListener('click', () => {
  const inputField = document.getElementById('candidato-numero');

  var modal = document.querySelector("dialog");
  var botal = document.querySelector("dialog button");
  var modal3 = document.querySelector("#erroConfirmar");
  var botal3 = document.querySelector("#erroConfirmar button");

  if (!inputField.value) {
      modal3.showModal();
      botal3.onclick = function() {
          modal3.close();
      };
  } else {
      modal.showModal();
      botal.onclick = function() {
          modal.close();
      };

      addItem({
          "voto": inputField.value,
      });

      
      confirmar.disabled = true;
      confirmar.style.backgroundColor = 'gray';
      confirmar.style.cursor = 'not-allowed';
  }
});

excluir.addEventListener('click', () => {

    
    const inputField = document.getElementById('candidato-numero');
    const selectedNumber = inputField.value;
   
   var modal4 = document.querySelector("#modalexcluir");
   var botao4 = document.querySelector("#modalexcluir button");
 
    var moda2 = document.querySelector("#Excluir");
   var bota2 = document.querySelector("#Excluir button");
 
    if (!selectedNumber) {
      modal4.showModal();
      botao4.onclick = function() {
        modal4.close();
     };
    } else {
      moda2.showModal();
     bota2.onclick = function() {
       moda2.close();
       inputField.value = ''; 
      };
   }
 
});








 