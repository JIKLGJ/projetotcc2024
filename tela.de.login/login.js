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
            alert("Preencha todos os campos");
           // document.getElementById("error-message").innerText = "Por favor, preencha todos os campos corretamente.";
        } else if (senha !== "Al.2023#") {
            document.getElementById("error-message").innerText = "Senha inserida está incorreta. Por favor, insira a senha correta.";
        } else {
            window.location.href = "http://127.0.0.1:5500/olho.html";
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