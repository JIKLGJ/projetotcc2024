

function cadastrar(){
    const newSEnha= prompt("digite seu senha")
    const newLogin=prompt("digte seu login")
    const newUser =localStorage.setItem(newSEnha,newLogin) 
    localStorage.setItem(newLogin,newSEnha)
}


const user = localStorage.getItem(newSEnha)


if(newLogin===newSEnha&&newSEnha===newLogin){
alert(`bem vindo`)

}
else{
    alert(`incorreto`)
}