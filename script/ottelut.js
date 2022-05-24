// Tuomas Polvinen

let norja = document.getElementById("norja");
let latvia = document.getElementById("latvia");
let usa = document.getElementById("usa");
let ruotsi = document.getElementById("ruotsi");
let britti = document.getElementById("britti");
let itävalta = document.getElementById("itävalta");
let tshekki = document.getElementById("tshekki");

// Buttonista painamalla kenttään buttonin alle ilmestyy kunkin ottelun lopputulos. 
 
norja.addEventListener("click", haeTulosNorja);
latvia.addEventListener("click", haeTulosLatvia);
usa.addEventListener("click", haeTulosUsa);
ruotsi.addEventListener("click", haeTulosRuotsi);
britti.addEventListener("click", haeTulosBritti);
itävalta.addEventListener("click", haeTulosItävalta);
tshekki.addEventListener("click", haeTulosTshekki);

function haeTulosNorja() {
    document.getElementById("norja_tulos").textContent="Voitto 5-0";
}

function haeTulosLatvia() {
    document.getElementById("latvia_tulos").textContent="Voitto 2-1";
}

function haeTulosUsa() {
    document.getElementById("usa_tulos").textContent="Voitto 4-1";
}

function haeTulosRuotsi() {
    document.getElementById("ruotsi_tulos").textContent="Tappio voittolaukauksilla 2-3";
}

function haeTulosBritti() {
    document.getElementById("britti_tulos").textContent="Voitto 6-0";
}

function haeTulosItävalta() {
    document.getElementById("itävalta_tulos").textContent="Voitto 3-0";
}

function haeTulosTshekki() {
    document.getElementById("tshekki_tulos").textContent="Voitto 3-0";
} 

// Lisätty tekstipätkä tyhjäksi jääneeseen laatikkoon.

let ottelut = document.querySelector("#kasi");
let p = document.createElement("p");
p.textContent="Suomen alkusarjaotteluiden tulokset nähtävissä painamalla vastustajan mukaista painiketta."
ottelut.appendChild(p);