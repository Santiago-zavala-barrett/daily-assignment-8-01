function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect(100, 20, 40, 125, 30, 40);

  rect(250, 20, 40, 125, 30, 40);

  arc(170, 240, 160, 160, 0, PI + QUARTER_PI, CHORD);
}
