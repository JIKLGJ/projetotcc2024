const ra = document.querySelector("#number1");
const senha = document.querySelector("#senha");
const modal2 = document.querySelector("#modal2");
const botao = document.querySelector("#botao");
const modal = document.querySelector("#modal");
var inputPass = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
var okButton = document.querySelector('#okButton'); // Remover a duplicação
var okButton2 = document.querySelector('#okButton2'); // Corrigir para outra variável

// Verificar se os campos estão preenchidos e se as credenciais estão corretas
botao.addEventListener('click', () => {
  if (ra.value === '' || senha.value === '' || ra.value.length < 9 || senha.value.length < 6) {
    modal.showModal(); // Mostrar modal se os campos estiverem vazios ou incorretos
  } else if (isNaN(ra.value)) {
    modal.showModal(); // Mostrar modal se o RA não for numérico
  } else {
    modal2.showModal(); // Mostrar segundo modal se tudo estiver correto
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

// Adicionar eventos ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
  okButton.addEventListener('click', () => {
    modal.close(); // Fechar o modal ao clicar em "OK"
  });
  okButton2.addEventListener('click', () => {
    modal2.close(); // Fechar o modal ao clicar em "OK"
  });
  
  bntShowpass.addEventListener('click', mostrarSenha); // Adicionar evento para mostrar/ocultar senha
});
