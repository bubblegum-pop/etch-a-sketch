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

// Initial grid
createGrid(16, gridContainer);
fillSquares();

gridSizeBtn.addEventListener("click", () => {
  let currentGridSize = gridContainer.childElementCount;
  removeAllChildren(gridContainer);
  let gridSize = getGridSize(currentGridSize);
  createGrid(gridSize, gridContainer);
  fillSquares();
});

// Functions

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

function getGridSize(currentSize) {
  let newSize;
  while (true) {
    newSize = parseInt(prompt("Enter the number of squares per side:"));
    if (newSize > 100 || newSize <= 0) {
      alert("Please enter a number between 1 and 100.")
    } else break;
  }
  if (isNaN(newSize)) {
    newSize = currentSize;
  }
  return newSize;
}

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function fillSquares() {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach(square => {
    square.addEventListener("mouseover", e => {
      e.target.classList.add("filled");
    });
  });
}

function createGrid(gridSize, container) {
  for (let i = 0; i < gridSize; i++) {
    createNewRow(gridSize, container);
  }
}