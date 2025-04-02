/*
Create and add a new div
*/
const container = document.querySelector(".container");

function createNewSquare() {
  let newSquare = document.createElement("div");
  newSquare.classList.add("square");
  container.appendChild(newSquare);
}