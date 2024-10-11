function validateAndRedirect() {
    const ra = document.getElementById("ra").value;

    const modal2 = document.querySelector("#erro");
    const botal2 = document.querySelector("#erro button");
    const modal = document.querySelector("dialog");
    const botal = document.querySelector("dialog button");

    if (ra === "" || ra.length < 9) {
        modal2.showModal();
        botal2.onclick = function() {
            modal2.close();
        };
    } else if (isNaN(ra)) {
        modal2.showModal();
        botal2.onclick = function() {
            modal2.close();
        };
    } else {
        modal.showModal();
        botal.onclick = function() {
            modal.close();
        };
    }
}
