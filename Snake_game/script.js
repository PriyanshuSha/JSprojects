let direction = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameoverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");
let lastPaintTime = 0;
let speed = 0;

let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
function main(ctime) {
  window.requestAnimationFrame(main);
  //   console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;

  gameEngin();
}

function gameEngin() {
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColoumnStart = e.x;
    snakeElement.classList.add("food");
    board.appendChild(snakeElement);
  });
}

window.requestAnimationFrame(main);
