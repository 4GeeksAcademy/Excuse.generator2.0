// my arrays:
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
function obtenerElemento(cualquier) {
  return Math.floor(Math.random() * cualquier.length);
}
//My reload restart function for random items
window.onload = function excusesrc() {
  var excusesrc =
    who[obtenerElemento(who)] +
    action[obtenerElemento(action)] +
    what[obtenerElemento(what)] +
    when[obtenerElemento(when)];
  //my link to the html source id
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excusesrc;
};
