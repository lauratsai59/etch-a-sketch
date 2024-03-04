const cdiv = document.querySelector('.grid');
const gridWidth = 960;
let monoColor = true;

function addSquare (count) {
  // Add totalSquare divs
  const totalSquare = count * count;
  for (let i = 1; i <= totalSquare + 1; i++) {
    const div = document.createElement('div');
    let size = gridWidth/count;
    div.style.height = size + "px";
    div.style.width = size + "px";
    div.style.border = "1px solid rgba(236, 238, 243, 0.76)";
    div.style.backgroundColor= "white";
   let index = i - 1;
    if (i === (count * index + 1)) {
      div.style.width = '100%';
      div.style.border = 0;
      div.style.height = 0;
    }
    cdiv.appendChild(div);
  }
}

function randomRgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function etchSquare(e) {
  // only etch square that is not etched before
  if (e.target.style.backgroundColor === "white") {
    if (monoColor) {
      e.target.style.backgroundColor = "rgb(75, 73, 73)";
    } else {
      e.target.style.backgroundColor = randomRgba();
    }
  }
}

function addSquareListener() {
  const squares = document.querySelectorAll('.grid>div');
  squares.forEach((square) => {
    square.addEventListener('mouseover', etchSquare);
  })
}

function removeSquareListener() {
  const squares = document.querySelectorAll('.grid>div');
  squares.forEach((square) => {
    square.removeEventListener('mouseover', etchSquare);
  })
}

let squareCountPerSide = 16;
addSquare(squareCountPerSide);
addSquareListener();

const btn = document.querySelector('.button#grid-size');
btn.addEventListener('click', (e) => {
squareCountPerSide = prompt(`Enter the number of squares per side for the new grid: (Maximum = 100)`);
squareCountPerSide = Number(squareCountPerSide);
if (Number.isInteger(squareCountPerSide) && squareCountPerSide > 0 && squareCountPerSide <= 100) {
    //removeBlockListener();
    document.querySelector('.grid').replaceChildren();
    addSquare(squareCountPerSide);
    addSquareListener();
  }
})

const eraseBtn = document.querySelector('.button#erase');
  eraseBtn.addEventListener('click', (e) => {
    const squares = document.querySelectorAll('.grid>div');
    squares.forEach((square) => {
      square.style.backgroundColor = "white";
  })
})

const monoBtn = document.querySelector('.button#mono-color');
monoBtn.addEventListener('click', (e) => {
  if (monoColor) {
    monoColor = false;
    monoBtn.textContent = "Pick Mono Color";
  } else {
    monoColor = true;
    monoBtn.textContent = "Pick Rainbow Color";
  }
})
















