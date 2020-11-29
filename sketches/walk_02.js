let x1, x2, y1, y2;
let l, w, r;
const lf = 50;
let woff = 0.5;
let sw = 4;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  createCanvas(myW, myW);
  x1 = width / 2;
  y1 = height / 2;
  w = floor(random(2));
  background(0);
  frameRate(10);
}

function draw() {
  // background(30, 20);
  r = floor(random(2));
  // l = floor(random(1, lf)) * 10;
  l = floor(random(10, lf));
  l = (r < 1) ? l * (-1) : l;
  if (w < 1) {
    x2 = x1 + l;
    y2 = y1;
  } else {
    y2 = y1 + l;
    x2 = x1;
  }
  woff = woff + 0.1;
  let n = noise(woff) * sw;
  // console.log(n, x2, y2);
  noFill();
  stroke(255, 200);
  strokeWeight(n);
  line (x1, y1, x2, y2);
  w = (w < 1) ? 1 : 0;
  x1 = x2;
  y1 = y2;
  // circle(width/2, height/2, n*10);
}

let myp5 = new p5();
