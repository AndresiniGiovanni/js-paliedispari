// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let testo = document.getElementById("parola");
let button = document.querySelector("button");
const risposta = document.querySelector("h2");

let palindromo = function () {
  const str = parola.value;

  if (!parola.value) {
    document.getElementById("risposta").innerHTML = " scrivi una parola";
    return;
  } else if (palindromoReverse(str)) {
    document.getElementById("risposta").innerHTML =
      str + " é una parola palindroma";
  } else {
    document.getElementById("risposta").innerHTML =
      str + " non é una parola palindroma";
  }
  parola.value = "";
};

button.addEventListener("click", palindromo);

// SECONDO ESERCIZIO

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const risultato = document.getElementById("risultato");
let bottone = document.getElementById("button");
const min = 1;
const max = 5;
let verifica = false;
let choice = "pari";
let error = false;

// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
bottone.addEventListener("click", pariDispari);

function pariDispari() {
  const numero = parseInt(document.getElementById("numero").value);
  const choiceEvenOrOdd = document.getElementById("scegliPoD").value;

  const numCPU = randomNumber(min, max);
  const numsum = numero + numCPU;
  console.log(numsum);
  verifica = isEven(numsum);

  console.log(verifica);

  if (numero > max || numero < 1) {
    risultato.innerHTML = "Inserire numero da 1 a 5.";
  } else if (
    (verifica && choiceEvenOrOdd === "pari") ||
    (!verifica && choiceEvenOrOdd === "dispari")
  ) {
    risultato.innerHTML = `scelta player:  "${numero}" <br> choice CPU :  "${numCPU}" <br> HAI VINTO`;
    console.log(risultato, choice);
  } else if (
    (!verifica && choiceEvenOrOdd === "pari") ||
    (verifica && choiceEvenOrOdd === "dispari")
  ) {
    risultato.innerHTML = `scelta player:  "${numero}" <br> choice CPU :  "${numCPU}" <br> HAI PERSO`;
  } else {
    risultato.innerHTML = "Errore";
  }
}
