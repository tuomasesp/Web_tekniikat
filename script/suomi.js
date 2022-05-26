// Tämän js:n tarkoituksena nostaa Granlund esille listalta
// mouseoveria käyttäen.  

let nhl = document.querySelector("#granlund")

nhl.addEventListener("mouseover", näytäGranlund);
nhl.addEventListener("mouseleave", näytäGranlund);

function näytäGranlund() {
    nhl.classList.toggle("granlund");
    
}

