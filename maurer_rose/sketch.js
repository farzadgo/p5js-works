let n = 6;
let d = 97;
let dSlider;
let nSlider;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  nSlider = createSlider(1, 10, 1);
  nSlider.position(624, 22);
  nSlider.style('width', '180px');

  dSlider = createSlider(1, 180, 1);
  dSlider.position(820, 22);
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

