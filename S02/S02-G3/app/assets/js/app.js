// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETÀ
4. VERIFICARE LA MAGGIORE O MINORE ETÀ
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE
click

VARIABILI GLOBALI
nome
anno
*/

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di input, calcolare l'età, verificare l'età, stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');

function eventHandler() {
  leggiForm();
  if (anno >= 1900 && anno <= 2023) {
    errore.innerHTML = '&nbsp;';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
  } else {
    errore.innerHTML =
      "Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023";
    return;
  }
}

function leggiForm() {
  nome = document.getElementById("nome").value;
  anno = document.getElementById("anno").value;
  console.log(nome, anno);
}

function calcolaEta() {
  eta = 2023 - anno;
}

function verifica() {
  stato = eta >= 18 ? "maggiorenne" : "minorenne";
  console.log(stato);
}

function scrivi() {
  document.getElementById("mioNome").innerHTML = "Ciao " + nome;
  document.getElementById("miaVerifica").innerHTML =
    "La tua età è " + eta + "; sei " + stato;
}

function cancellaForm() {
  document.getElementById("nome").value = "";
  document.getElementById("anno").value = "";
}
