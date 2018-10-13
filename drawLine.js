class drawLine {
  constructor({
    start,
    end,
    degree,
    lineLength,
    cuttingLength,
    density,
    randomDegree,
    randomCutting,
    randomDensity
  }) {
    this.start = start;
    this.end = end;
    this.degree = degree;
    this.lineLength = lineLength;
    this.cuttingLength = cuttingLength;
    this.density = density;
    this.randomDegree = randomDegree;
    this.randomCutting = randomCutting;
    this.randomDensity = randomDensity;
  }

  draw() {
    line(this.start.x, this.start.y, this.end.x, this.end.y);

    if (this.lineLength > 5) {
      this.branch("left");
      this.branch("right");
    }
  }

  branch(rot) {
    let dir = p5.Vector.sub(this.end, this.start);

    if (this.randomDegree) this.degree = random(PI / 64, PI / 4);
    if (this.randomCutting) this.cuttingLength = random(0.6, 0.8);
    if (this.randomDensity) this.density = random(4, 10);

    dir.rotate(rot === "right" ? this.degree : -this.degree);
    dir.mult(this.cuttingLength);

    let newEnd = p5.Vector.add(this.end, dir);
    const miniBranch = new drawLine({
      start: this.end,
      end: newEnd,
      degree: this.degree,
      lineLength: this.lineLength - this.density,
      cuttingLength: this.cuttingLength,
      density: this.density,
      randomDegree: this.randomDegree
    });

    miniBranch.draw();
  }
}
