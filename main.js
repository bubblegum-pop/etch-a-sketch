function createNewSquare(container) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("square");
  container.appendChild(newSquare);
  return newSquare;
}

function createNewRow(container, numSquares) {
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let i = 0; i < numSquares; i++) {
    createNewSquare(newRow);
  }
  container.appendChild(newRow);
  return newRow;
}

function createGrid(container, numRows, numCols) {
  for (let i = 0; i < numRows; i++) {
    createNewRow(container, numCols);
  }
}

const myContainer = document.querySelector(".container");
createGrid(myContainer, 16, 16);