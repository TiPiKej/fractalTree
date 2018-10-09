function drawLine(length = startingLengthLine, dir = "center") {
  const rad =
    dir === "center"
      ? 0
      : dir === "right"
        ? degree
        : dir === "left"
          ? -degree
          : NULL;
  push();
  rotate(rad);
  line(0, 0, 0, -length);
  translate(0, -length);
  if (length > 5) {
    drawLine(length * cuttingLength, "right");
    drawLine(length * cuttingLength, "left");
  }
  pop();
}
