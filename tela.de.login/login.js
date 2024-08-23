
function mostrarSenha() {
  var inputPass  = document.getElementById('senha')
  var bntShowpass =	document.getElementById('bnt-senha')

  if(inputPass.type === 'password'){
      inputPass.setAttribute('type','text')
      bntShowpass.classList.replace('bi bi-eye-fill','bi bi-eye-slash-fill')
}else{
  inputPass.setAttribute('type','password')
      bntShowpass.classList.replace('bi bi-eye-slash-fill','bi bi-eye-fill')
      
      

}
  }

  function validateFields() {
      var num1 = document.getElementById("number1").value;
      var senha = document.getElementById("senha").value;
      var digito = document.getElementById("digito").value;

      if (num1 === "" || senha === ""  ) {
        document.getElementById("error-message").innerText =  

       
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "assine os campos corretamente",
            footer: '<a href="http://127.0.0.1:5500/site2/senha.html">Esqueceu a senha?</a>',
          });
      } else if (senha !== "Al.2023#" || num1 !== "000108453230")  {
        document.getElementById("error-message").innerText =  

       
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Erro ao entrar na sua conta!",
                footer: '<a href="http://127.0.0.1:5500/site2/senha.html">Esqueceu a senha?</a>'
              });
      } else {
          window.location.href = `http://127.0.0.1:5500/Pagina%20de%20bem%20vindo2/index.html`;
      }
  }

function maxlen(input){
  if ( input.value.length >13){
      input.value = input.value.slice(0,13);
  }
} 

document.getElementById("number1").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890".indexOf(chr) < 0)
    return false;
};

