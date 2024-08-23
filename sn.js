function validateAndRedirect() {
    const ra = document.getElementById("ra").value;
    const errorMessageElement = document.getElementById("error-message");
    const menssageElement = document.getElementById("menssage");
    var modal=document.querySelector("dialog");
    var botal=document.querySelector("dialog button");
    
    if (/^000\d{9}$/.test(ra)) {
        modal.showModal()

        botal.onclick=function(){
            modal.close()
        }
    
        
    } else {
        errorMessageElement.innerText = "Por favor, insira um RA válido de 12 dígitos começando com 000.";
        errorMessageElement.style.display = 'block';
        setTimeout(() => {
            errorMessageElement.style.display = 'none';
        }, 5000);
    }
}
