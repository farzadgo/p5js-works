let x1, x2, y1, y2;
let l;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  createCanvas(myW, myW);
  x1 = width / 2;
  y1 = height / 2;
  background(0);
  frameRate(15);
}

function draw() {
  l = floor(random(1, 6)) * 10;
  const r = floor(random(4));
  switch (r) {
    case 0:
      x2 = x1 + l;
      y2 = y1;
      break;
    case 1:
      y2 = y1 + l;
      x2 = x1;
      break;
    case 2:
      x2 = x1 - l;
      y2 = y1;
      break;
    case 3:
      y2 = y1 - l;
      x2 = x1;
      break;
  }
  stroke(255, 100);
  strokeWeight(5);
  line(x1, y1, x2, y2);
  x1 = x2;
  y1 = y2;
}

let myp5 = new p5();
