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

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Selecionando elementos da página
const confirmar = document.querySelector('#confirmar');
const excluir = document.querySelector('#excluir');
const inputField = document.getElementById('candidato-numero');
const btn120 = document.querySelector('#btn-120');
const btn200 = document.querySelector('#btn200');
const btn150 = document.querySelector('#btn150');

// Função para adicionar o voto ao banco de dados Firebase
const addItem = async (data) => {
  const newItemRef = ref(db, 'gremio');
  const newItemKey = push(newItemRef).key;

  try {
    await set(ref(db, `gremio/${newItemKey}`), data);
    console.log('Voto registrado com ID: ', newItemKey);
  } catch (error) {
    console.error('Erro ao registrar voto: ', error);
    alert('Erro na votação. Tente novamente.');
  }
};

// Função para verificar se os botões estão desabilitados
function verificarEstado() {
  const estadoConfirmar = localStorage.getItem("confirmarDesabilitado");

  if (estadoConfirmar === "true") {
    confirmar.disabled = true;
    confirmar.style.backgroundColor = 'gray';
    confirmar.style.cursor = 'not-allowed';

    excluir.disabled = true;
    excluir.style.backgroundColor = 'gray';
    excluir.style.cursor = 'not-allowed';
  }
}

// Definindo o comportamento dos botões de números
btn120.addEventListener('click', function castVote() {
  inputField.value = 120;
  console.log("Clicou 120");
});

btn200.addEventListener('click', function castVote() {
  inputField.value = 200;
  console.log("Clicou 200");
});

btn150.addEventListener('click', function castVote() {
  inputField.value = 150;
  console.log("Clicou 150");
});

// Evento de "Confirmar" para registrar o voto
confirmar.addEventListener('click', () => {
  const modal = document.querySelector("dialog");
  const botao = document.querySelector("dialog button");
  const modalErro = document.querySelector("#erroConfirmar");
  const botaoErro = document.querySelector("#erroConfirmar button");

  // Verificando se o usuário selecionou um número
  if (!inputField.value) {
    modalErro.showModal();
    botaoErro.onclick = () => modalErro.close();
  } else {
    modal.showModal();
    botao.onclick = () => modal.close();

    // Registrar o voto no banco de dados Firebase
    addItem({ voto: inputField.value });

    // Desabilitar os botões após confirmar
    confirmar.disabled = true;
    confirmar.style.backgroundColor = 'gray';
    confirmar.style.cursor = 'not-allowed';

    excluir.disabled = true;
    excluir.style.backgroundColor = 'gray';
    excluir.style.cursor = 'not-allowed';

    // Salvar o estado de desabilitação no localStorage
    localStorage.setItem("confirmarDesabilitado", "true");
  }
});

// Evento de "Excluir" para limpar a escolha do número
excluir.addEventListener('click', () => {
  const selectedNumber = inputField.value;
  const modalExcluir = document.querySelector("#modalexcluir");
  const botaoExcluir = document.querySelector("#modalexcluir button");

  const modalCancel = document.querySelector("#Excluir");
  const botaoCancel = document.querySelector("#Excluir button");

  if (!selectedNumber) {
    modalExcluir.showModal();
    botaoExcluir.onclick = () => modalExcluir.close();
  } else {
    modalCancel.showModal();
    botaoCancel.onclick = () => {
      modalCancel.close();
      inputField.value = '';  // Limpa o número selecionado
    };
  }
});

// Verificar o estado ao carregar a página
verificarEstado();
