

const ra = document.querySelector("#number1");
const senha = document.querySelector("#senha");
const digito = document.querySelector("#digito");

const botao = document.querySelector("#botao");
const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");
var inputPass = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
var okButton = document.querySelector('#okButton');
var okButton2 = document.querySelector('#okButton2');

botao.addEventListener("click", async () => {
  if (ra.value === '' || senha.value === '' || ra.value.length < 9 || senha.value.length < 6 ) {
    modal.showModal(); // Show modal if fields are empty or incorrect
  } else if (isNaN(ra.value)) {
    modal.showModal(); // Show modal if RA is not numeric
  } else {
   
          modal2.showModal();
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
    modal.close();
  });

  okButton2.addEventListener('click', () => {
    modal2.close();
  });
});
