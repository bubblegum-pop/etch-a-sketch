/*
Create and add a new div
*/
const container = document.querySelector(".container");
const newSquare = document.createElement("div");

function createNewSquare() {
  let newSquare = document.createElement("div");
  newSquare.style.border = "1px solid black";
  newSquare.style.height = "20px";
  newSquare.style.width = "20px";
  container.appendChild(newSquare);
}