// Tämän js:n tarkoituksena nostaa Granlund esille listalta
// mouseoveria käyttäen. Muuttaa samalla tähti-laatikon muotoilun. 

let nhl = document.querySelector("#granlund");
let tähti = document.getElementById("tähti");
nhl.addEventListener("mouseover", näytäGranlund);
tähti.addEventListener("mouseover", näytäGranlund);


function näytäGranlund() {
    nhl.classList="granlund";
    tähti.classList="granlund";
}
