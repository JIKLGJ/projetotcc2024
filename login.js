
var inputPass  = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
var btnEntrar = document.querySelector('#Entrar')

const modal = document.querySelector("#modal")
const ra = document.querySelector("#number1")
const senha = document.querySelector("#senha")
const botao = document.querySelector("#abrirModal")


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




document.getElementById("number1").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which );
  if ("1234567890".indexOf(chr) < 0) {
      e.preventDefault();
  }
};

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
  