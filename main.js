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

const mainContainer = document.querySelector(".container");

// Button
const gridSizeBtn = document.createElement("button");
gridSizeBtn.textContent = "Change grid size";
gridSizeBtn.classList.add("gridSizeBtn");
mainContainer.appendChild(gridSizeBtn);

// Grid container
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
mainContainer.appendChild(gridContainer);

// Create 16x16 grid
for (let i = 0; i < 16; i++) {
  createNewRow(16, gridContainer);
}

const allSquares = document.querySelectorAll(".square");
allSquares.forEach(square => {
  square.addEventListener("mouseover", e => {
    e.target.classList.add("filled");
  });
});