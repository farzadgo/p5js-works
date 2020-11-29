let x = 0;
let y = 0;
let spacing = 30;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  console.log('setup function loaded');
  createCanvas(myW, myW);
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (random(1) < 0.85) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x + spacing, y, x, y + spacing);
    stroke(random(255), random(255), random(255));
    strokeWeight(8);
  };
  x = x + spacing;
  if (x > width || y > height) {
    x = 0;
    y = y + spacing;
  };

}

let myp5 = new p5();
