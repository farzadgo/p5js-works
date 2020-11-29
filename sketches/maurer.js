let n = 6;
let d = 97;
let dSlider;
let nSlider;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  nSlider = createSlider(1, 10, 1);
  nSlider.position(20, 40);
  nSlider.style('width', '180px');

  dSlider = createSlider(1, 180, 1);
  dSlider.position(20, 80);
  dSlider.style('width', '180px');
}

function draw() {
  background(0);
  translate(width/2, height/2);
  noFill();
  d = dSlider.value();
  n = nSlider.value();
  
  stroke(255);
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 300 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();

  // stroke(173, 255, 47);
  // strokeWeight(4);
  // beginShape();
  // for (let i = 0; i < 361; i++) {
  //   let k = i;
  //   let r = 300 * sin(n*k);
  //   let x = r * cos(k);
  //   let y = r * sin(k);
  //   vertex(x,y);
  // }
  // endShape();
}

let myp5 = new p5();
