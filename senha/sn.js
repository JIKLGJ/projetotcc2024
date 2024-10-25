var inputPass = document.getElementById('senha');
var bntShowpass = document.querySelector('#bnt-senha')
var botao=document.querySelector("#botao")

botao.addEventListener("click",()=>{
    const ra = document.getElementById("ra");

    const modal2 = document.querySelector("#erro");
    const botal2 = document.querySelector("#erro button");
    const modal = document.querySelector("dialog");
    const botal = document.querySelector("dialog button");

    if (senha.value === "" || senha.value.length < 6||ra.value === '' || senha.value === '' || ra.value.length < 9) {
        modal2.showModal();
        botal2.onclick = function() {
            modal2.close();
        };
    
    } 
    
    else if(isNaN(ra.value)){

        modal.showModal();

    }
    else {
        modal.showModal();
        botal.onclick = function() {
            modal.close();
        };
    }
})


    
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
  