const canvasWidth = 600;
const canvasHeight = 500;

let sliderDegree, sliderLength, sliderCutLen, sliderDensity;
let randomDegree = false,
  randomLength = false,
  randomCutting = false,
  randomDensity = false;

function setup() {
  const mouseEvent = ({
    degree = false,
    length = false,
    cutting = false,
    density = false
  }) => {
    // reset all var's
    randomDegree = false;
    randomLength = false;
    randomCutting = false;
    randomDensity = false;

    // set active vars
    if (degree) randomDegree = true;
    if (length) {
      randomLength = true;
      lineLength = random(0, 100);
    }
    if (cutting) randomCutting = true;
    if (density) randomDensity = true;

    // set randoming
    frameRate(60);

    // stop drawing
    setTimeout(() => {
      frameRate(0);
    }, 1000);
  };

  createCanvas(canvasWidth, canvasHeight);

  createP("Rotate degree");
  sliderDegree = createSlider(0, PI / 4, PI / 8, PI / 64);

  const checkboxRandomDegree = createButton("Random degree");
  checkboxRandomDegree.mousePressed(() => mouseEvent({ degree: true }));

  createP("Starting branch length");
  sliderLength = createSlider(0, 100, 50);

  const checkboxRandomBranchLength = createButton("Random Branch Length");
  checkboxRandomBranchLength.mousePressed(() => mouseEvent({ length: true }));

  createP("Length of cutting branch");
  sliderCutLen = createSlider(0, 1, 0.8, 0.1);

  const checkboxRandomCuttingBranch = createButton("Random Cutting Length");
  checkboxRandomCuttingBranch.mousePressed(() => mouseEvent({ cutting: true }));

  createP("Branch density");
  sliderDensity = createSlider(4, 10, 5);

  const checkboxRandomBranchDensity = createButton("Random Branch Density");
  checkboxRandomBranchDensity.mousePressed(() => mouseEvent({ density: true }));

  createP("");
  const checkboxRandom = createButton("Random branches");

  createP("");
  const checkboxReset = createButton("Reset to default");

  checkboxRandom.mousePressed(() =>
    mouseEvent({ degree: true, length: true, cutting: true, density: true })
  );

  checkboxReset.mousePressed(() => {
    randomDegree = false;
    randomLength = false;
    randomCutting = false;
    randomDensity = false;
    frameRate(60);
  });
}

function draw() {
  background(120);

  const degree = sliderDegree.value();
  if (!randomLength) lineLength = sliderLength.value();
  const cuttingLength = sliderCutLen.value();
  const density = sliderDensity.value();

  const tree = new drawLine({
    start: createVector(width / 2, height),
    end: createVector(width / 2, height - lineLength),
    degree,
    lineLength,
    cuttingLength,
    density,
    randomDegree,
    randomCutting,
    randomDensity
  });

  tree.draw();
  // console.log(tree.ranArr());
}
