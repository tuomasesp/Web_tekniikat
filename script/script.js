// Tuomas Polvinen

let norja = document.getElementById("norja");
let latvia = document.getElementById("latvia");
let usa = document.getElementById("usa");
let ruotsi = document.getElementById("ruotsi");
let britti = document.getElementById("britti");
let itävalta = document.getElementById("itävalta");
let tshekki = document.getElementById("tshekki");

norja.addEventListener("click", haeTulosNorja);
latvia.addEventListener("click", haeTulosLatvia);
usa.addEventListener("click", haeTulosUsa);
ruotsi.addEventListener("click", haeTulosRuotsi);

function haeTulosNorja() {
    document.getElementById("norja_tulos").innerHTML="Voitto 5-0";
}

function haeTulosLatvia() {
    document.getElementById("latvia_tulos").innerHTML="Voitto 2-1";
}

function haeTulosUsa() {
    document.getElementById("usa_tulos").innerHTML="Voitto 4-1";
}

function haeTulosRuotsi() {
    document.getElementById("ruotsi_tulos").innerHTML="Tappio voittolaukauksilla 2-3"
}