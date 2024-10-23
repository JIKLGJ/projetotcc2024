var inputPass = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha');
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