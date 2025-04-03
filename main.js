function addBtn() {
  const changeGridBtn = document.createElement("button");
  changeGridBtn.classList.add("changeGridBtn");
  changeGridBtn.textContent("Change grid size");
  return changeGridBtn;
}

function createNewSquare(container) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("square");
  container.appendChild(newSquare);
  return newSquare;
}

function createNewRow(numSquares, container) {
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let i = 0; i < numSquares; i++) {
    createNewSquare(newRow);
  }
  container.appendChild(newRow);
  return newRow;
}

function createGrid(container) {
  let squaresPerSide = parseInt(prompt("Enter the number of squares per side:"));
  for (let i = 0; i < squaresPerSide; i++) {
    createNewRow(squaresPerSide, container);
  }
}

const mainContainer = document.querySelector(".container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

mainContainer.appendChild(gridContainer);
createGrid(gridContainer);

const allSquares = document.querySelectorAll(".square");
allSquares.forEach(square => {
  square.addEventListener("mouseover", e => {
    e.target.classList.add("filled");
  });
});