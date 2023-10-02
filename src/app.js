/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excusesrc() {
  //write your code here

  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);

  var excusesrc =
    who[randomwho] + action[randomaction] + what[randomwhat] + when[randomwhen];

  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excusesrc;
};
