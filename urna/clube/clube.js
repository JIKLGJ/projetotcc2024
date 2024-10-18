import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbQH9lRIEfYeXGA92QWVIkZ0No6-5xrio",
  authDomain: "urna-ec7a7.firebaseapp.com",
  databaseURL: "https://urna-ec7a7-default-rtdb.firebaseio.com",
  projectId: "urna-ec7a7",
  storageBucket: "urna-ec7a7.appspot.com",
  messagingSenderId: "153920023241",
  appId: "1:153920023241:web:35473099846372372ffb18"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Seleção dos elementos
const seriesInput = document.querySelector("#series");
const raInput = document.querySelector("#ra");
const digitoInput = document.querySelector("#digito");
const escolhaInput = document.querySelector("#escolha");
const botao = document.querySelector("#botao");

var okButton = document.querySelector('#okButton');
const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
var okButton2 = document.querySelector('#okButton2');
// Função POST
async function POST() {
  const url = "https://urna-ec7a7-default-rtdb.firebaseio.com/clube.json";
  
  const newData = {
    ra: raInput.value,
    serie: seriesInput.value,
    escolha: escolhaInput.value,
    digito: digitoInput.value
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

// Validação dos dados e envio ao clicar no botão
botao.addEventListener('click', () => {
  // Verificação de dados vazios ou incompletos
  if (raInput.value === '' ||   raInput.value.length < 9 || isNaN(raInput.value)) {
    // Exibir modal de erro
    modal.showModal(); 
    
  }
  
  
  else {
    // Exibir modal de sucesso
    modal2.showModal();
      POST(); // Chamar a função POST depois de fechar o modal
    
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
  
