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
