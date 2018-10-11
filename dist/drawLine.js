class drawLine {
  constructor({ start, end, degree, lineLength, cuttingLength, density }) {
    this.start = start;
    this.end = end;
    this.degree = degree;
    this.lineLength = lineLength;
    this.cuttingLength = cuttingLength;
    this.density = density;
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
    dir.rotate(rot === "right" ? this.degree : -this.degree);
    dir.mult(this.cuttingLength);

    let newEnd = p5.Vector.add(this.end, dir);
    const miniBranch = new drawLine({
      start: this.end,
      end: newEnd,
      degree: this.degree,
      lineLength: this.lineLength - this.density,
      cuttingLength: this.cuttingLength,
      density: this.density
    });

    miniBranch.draw();
  }
}
