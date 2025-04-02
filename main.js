/*
Create and add a new div
*/
const container = document.querySelector(".container");

function createNewSquare(rowElement = container) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("square");
  rowElement.appendChild(newSquare);
  return newSquare;
}

function createNewRow(numSquares) {
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let i = 0; i < numSquares; i++) {
    let newSquare = createNewSquare(newRow);
    newSquare.style.marginLeft = "-1px";
  }
  container.appendChild(newRow);
}

createNewRow(16);