
var inputPass  = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
var btnEntrar = document.querySelector('#Entrar')

var botao = document.querySelector("#abrirModal")
var modal = document.querySelector("#modal")

const ra = document.querySelector("#number1")
const senha = document.querySelector("#senha")
const okButton = document.querySelector('#okButton');


botao.addEventListener('click', () => {
  // Verifica se os campos estão vazios
  if (ra.value != '000108453230' || senha.value != 'Al.2023#'){
    
    modal.showModal(); // Exibe o modal se algum campo estiver vazio
  } else if  (ra.value === '' || senha.value === '')  {
   
    modal.showModal(); // Exibe o modal para indicar sucesso
  } else {
    
    window.location.href = `http://127.0.0.1:5500/Pagina%20de%20bem%20vindo2/index.html`;
  }
});





function mostrarSenha() {

  if(inputPass.type === 'password'){
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

  document.queryselector('#abrirModal').addEventListener('click', () => {
      
  });
});
