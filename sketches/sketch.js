const str = `work in progrss.. what!?`;
const words = str.split('');

function preload() {
  courier = loadFont('courbd.ttf');
}

function setup() {
  createCanvas(600, 600);
  stroke(255);
  strokeWeight(2);
  textFont(courier);
  background(0);
  words.forEach((e, i) => {
    let ind = i + 2;
    textSize(32);
    text(e, (ind*22), (ind*2)+50);
    // fill(255, 102, 153);
  });
}

function draw() {
  noLoop();
}


