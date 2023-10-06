/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Arrays which i'll get the random element from:
let who = ["El perro ", "Su novia ", "La chavala ", "El guevón "];
let action = ["se comió ", "tiró ", "desintegró ", "se fumó "];
let what = ["mi tarea ", "las llaves ", "el coche ", "la casa "];
let when = [
  "antes de clase.",
  "justo a tiempo.",
  "cuando terminé.",
  "mientras comia.",
  "cuando salí."
];
// My random reusable function:
function getFinalItem(arrayAleatorio) {
  return arrayAleatorio[Math.floor(Math.random() * arrayAleatorio.length)];
}
//My reload restart function for random items
window.onload = function excuseSrc() {
  var excuseSrc =
    getFinalItem(who) +
    getFinalItem(action) +
    getFinalItem(what) +
    getFinalItem(when);
  //my link to the html source id
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseSrc;
};
