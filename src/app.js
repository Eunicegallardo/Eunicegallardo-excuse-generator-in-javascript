/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-button").addEventListener("click", () => {
    document.querySelector("#my-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello world!");
};

let generateExcuse = () => {
  let who = ["The dog", "My sister", "His turtle", "My bird"];
  let action = ["ate", "ran on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class", "right on time", "when I finished"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
