const canvasWidth = 600;
const canvasHeight = 500;

let sliderDegree, sliderLength, sliderCutLen, sliderDensity;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  createP("Rotate degree");
  sliderDegree = createSlider(0, PI / 4, PI / 8, PI / 64);

  createP("Starting branch length");
  sliderLength = createSlider(0, 100, 50);

  createP("Length of cutting branch");
  sliderCutLen = createSlider(0, 1, 0.8, 0.1);

  createP("Branch density");
  sliderDensity = createSlider(4, 10, 5);
}

function draw() {
  background(120);

  const degree = sliderDegree.value();
  const lineLength = sliderLength.value();
  const cuttingLength = sliderCutLen.value();
  const density = sliderDensity.value();

  const tree = new drawLine({
    start: createVector(width / 2, height),
    end: createVector(width / 2, height - lineLength),
    degree,
    lineLength,
    cuttingLength,
    density
  });

  tree.draw();
}
