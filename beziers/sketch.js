let t;
let bgCol = 0;

function setup() {
  createCanvas(800, 800);
  stroke(255, 18);
  noFill();
  t = 0;
  background(bgCol);
}

function draw() {
  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.004;

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 1000 == 0) {
	background(bgCol);
  }
}