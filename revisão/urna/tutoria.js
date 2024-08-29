function castVote(number) {
    const inputField = document.getElementById('candidato-numero');
    inputField.value += number;
}
 function validateFields() {
    const selectedNumber = document.getElementById('candidato-numero').value;

    var modal=document.querySelector("dialog");
    var botal=document.querySelector("dialog button");
    var modal3=document.querySelector("#erroConfirmar")
    var botal3=document.querySelector("#erroConfirmar button ")

    if (!selectedNumber) {

        modal3.showModal()

        botal3.onclick=function(){
            modal3.close()
        }
} 
else {
    modal.showModal()

    botal.onclick=function(){
        modal.close()
    }

}


}
function deleteAction() {
    const inputField = document.getElementById('candidato-numero');
    const selectedNumber = inputField.value;
    var modal5=document.querySelector("#modalapagar")
    var botal5=document.querySelector("#modalapagar button")

    if (!selectedNumber) {
modal5.showModal()
botal5.onclick=function(){
    modal5.close()
}

    } else {
        inputField.value = selectedNumber.slice(0, -1);

    }
}


function deleteAll() {
    const inputField = document.getElementById('candidato-numero');
    const selectedNumber = inputField.value;
    var modal4=document.querySelector("#modalexcluir")
    var botao4=document.querySelector("#modalexcluir button")

    var moda2=document.querySelector("#Excluir");
    var bota2=document.querySelector("#Excluir button");

    if (!selectedNumber) {
        modal4.showModal()

        botao4.onclick=function(){
            modal4.close()
        }
    } else {
        moda2.showModal()

    bota2.onclick=function(){
        moda2.close()
    }
        inputField.value = '';

    }
}