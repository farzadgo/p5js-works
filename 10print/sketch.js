let x = 0;
let y = 0;
let spacing = 30;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  noFill();

  if (random(1) < 0.85) {
    line(x, y, x + spacing, y + spacing);
    // stroke(0);
    // strokeWeight(8);
    // ellipse (x, y, 5);
  } else {
    line(x + spacing, y, x, y + spacing);
    stroke(random(255), random(255), random(255));
    strokeWeight(8);
    ellipse (x, y, 8);
  };
  x = x + spacing;
  if (x > width || y > height) {
    x = 0;
    y = y + spacing;
  };

}

