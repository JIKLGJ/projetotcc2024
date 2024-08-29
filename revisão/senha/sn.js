function validateAndRedirect() {
    const ra = document.getElementById("ra").value;

    var modal2=document.querySelector("#erro")
    var botal2=document.querySelector("#erro button")
    var modal=document.querySelector("dialog");
    var botal=document.querySelector("dialog button");
    
    if (ra=="000109869045") {
        modal.showModal()

        botal.onclick=function(){
            modal.close()
        }
    
        
    } else {

        modal2.showModal()

        botal2.onclick=function(){
            modal2.close()
        }

      
}
}