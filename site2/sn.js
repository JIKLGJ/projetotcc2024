function validateAndRedirect() {
    const ra = document.getElementById("ra").value;
    const errorMessageElement = document.getElementById("error-message");
    const menssageElement = document.getElementById("menssage");
    
    if (/^000\d{9}$/.test(ra)) {
        menssageElement.innerText = "Sua senha é Al.2023#";
        menssageElement.style.display = 'block';
        setTimeout(() => {
            menssageElement.style.display = 'none';
        }, 5000);
    
        errorMessageElement.style.display = 'none';
    } else {
        errorMessageElement.innerText = "Por favor, insira um RA válido de 12 dígitos começando com 000.";
        errorMessageElement.style.display = 'block';
        setTimeout(() => {
            errorMessageElement.style.display = 'none';
        }, 5000);
    }
}
