const startingLengthLine = 50;
const cuttingLength = 5 / 6; // per each requrence
let degree = 3.14 / (4 + 3);
const canvasWidth = 600;
const canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  translate(width / 2, height);

  drawLine();
}
