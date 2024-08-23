function castVote(number) {
    const inputField = document.getElementById('candidato-numero');
    inputField.value += number;
}
 function validateFields() {
    const selectedNumber = document.getElementById('candidato-numero').value;
    const mensagemErroElement = document.getElementById("mensagem-erro");
    if (!selectedNumber) {
        mensagemErroElement.innerText = "Por favor, aperte em um número para confirmar.";
        mensagemErroElement.style.display = 'block';
        setTimeout(() => {
            mensagemErroElement.style.display = 'none';
        }, 5000);

} else {
alert('Seu voto no número ' + selectedNumber + ' foi confirmado!');
mensagenErrogeElement.style.display = 'none';
}


}
function deleteAction() {
    const inputField = document.getElementById('candidato-numero');
    const selectedNumber = inputField.value;
    const mensagemErroElement = document.getElementById("mensagem-erro");
    if (!selectedNumber) {
        mensagemErroElement.innerText = "Por favor, aperte um número para apagar.";
        mensagemErroElement.style.display = 'block';
        setTimeout(() => {
            mensagemErroElement.style.display = 'none';
        }, 5000);
    } else {
        inputField.value = selectedNumber.slice(0, -1);
        mensagemErroElement.style.display = 'none';
    }
}


function deleteAll() {
    const inputField = document.getElementById('candidato-numero');
    const selectedNumber = inputField.value;
    const mensagemErroElement = document.getElementById("mensagem-erro");
    if (!selectedNumber) {
        mensagemErroElement.innerText = "Por favor, aperte um número para excluir.";
        mensagemErroElement.style.display = 'block';
        setTimeout(() => {
            mensagemErroElement.style.display = 'none';
        }, 5000);
    } else {
        alert('Seu voto no número ' + selectedNumber + ' foi cancelado!');
        inputField.value = '';
        mensagemErroElement.style.display = 'none';
    }
}