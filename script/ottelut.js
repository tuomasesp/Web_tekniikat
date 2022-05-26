// Tuomas Polvinen

let norja = document.getElementById("norja");
let latvia = document.getElementById("latvia");
let usa = document.getElementById("usa");
let ruotsi = document.getElementById("ruotsi");
let britti = document.getElementById("britti");
let itävalta = document.getElementById("itävalta");
let tshekki = document.getElementById("tshekki");

let väri = document.getElementById("tausta");

// Buttonista painamalla kenttään buttonin alle ilmestyy kunkin ottelun lopputulos. 
// Lisäksi buttonilla taustan väri vaihtuu vastaamaan valitun vastustajamaan väriteemaa
// Tausta sekä tekstin väri muuttuvat
 
norja.addEventListener("click", haeTulosNorja);
latvia.addEventListener("click", haeTulosLatvia);
usa.addEventListener("click", haeTulosUsa);
ruotsi.addEventListener("click", haeTulosRuotsi);
britti.addEventListener("click", haeTulosBritti);
itävalta.addEventListener("click", haeTulosItävalta);
tshekki.addEventListener("click", haeTulosTshekki);

function haeTulosNorja() {
    document.getElementById("norja_tulos").textContent="Voitto 5-0";
    väri.style.background="red";
    väri.style.color="blue";
}

function haeTulosLatvia() {
    document.getElementById("latvia_tulos").textContent="Voitto 2-1";
    väri.style.background="darkred";
    väri.style.color="white";
}

function haeTulosUsa() {
    document.getElementById("usa_tulos").textContent="Voitto 4-1";
    väri.style.background="navy";
    väri.style.color="white";
}

function haeTulosRuotsi() {
    document.getElementById("ruotsi_tulos").textContent="Tappio voittolaukauksilla 2-3";
    väri.style.background="yellow";
    väri.style.color="blue";
}

function haeTulosBritti() {
    document.getElementById("britti_tulos").textContent="Voitto 6-0";
    väri.style.background="midnightblue"
    väri.style.color="white";

}

function haeTulosItävalta() {
    document.getElementById("itävalta_tulos").textContent="Voitto 3-0";
    väri.style.background="red";
    väri.style.color="white";
}

function haeTulosTshekki() {
    document.getElementById("tshekki_tulos").textContent="Voitto 3-0";
    väri.style.background="red";
    väri.style.color="blue";
} 

// Lisätty tekstipätkä tyhjäksi jääneeseen laatikkoon.

let ottelut = document.querySelector("#kasi");
let p = document.createElement("p");
p.textContent="Suomen alkusarjaotteluiden tulokset nähtävissä painamalla vastustajan mukaista painiketta."
ottelut.appendChild(p);