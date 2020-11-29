let x = 300;
let y = 300;
let d = 1200;
let moveFactor = 0.75;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  createCanvas(myW, myW);
  // button = createButton('save image');
  // button.position(500, 24);
  // button.mousePressed(download);
  // document.getElementById("save").addEventListener("click", download);
}

function draw() {
  background(0);
  noStroke();
  //stroke(255);
  //strokeWeight(1);
  //noFill();
  drawHCircle(x, y, d);
  drawVCircle(x, y, d);
  noLoop();
}

function download() {
  save('farzadgo_convas.png');
  return false;
}

function drawHCircle (x, y, d) {
  fill(random(0, 255), random(0, 255), random(0,255), 80);
  ellipse(x, y, d);
  if (d > 10) {
    drawHCircle(x + d * moveFactor, y, d * moveFactor);
    drawHCircle(x - d * moveFactor, y, d * moveFactor);
    //drawCircle(x, y + d * 0.5, d * 0.5);
  }
}

function drawVCircle (x, y, d) {
  fill(random(0, 255), random(0, 255), random(0,255), 80);
  ellipse(x, y, d);
  if (d > 10) {
    drawVCircle(x, y + d * moveFactor, d * moveFactor);
    drawVCircle(x, y - d * moveFactor, d * moveFactor);
  }
}

let myp5 = new p5();
