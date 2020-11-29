let cols, rows;
let scl = 30;
let w = 1200;
let h = 1400;
var terrain = [];
var flying = 0;
let myW = window.innerWidth > 600 ? 600 : window.innerWidth - 20;

function setup() {
  createCanvas(myW, myW, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw() {

  flying -= 0.06;
  //terrain.length = rows;
  var yoff = flying;
  for (y = 0; y < rows; y++){
    terrain [y] = [];
    var xoff = 0;
  	for (x = 0; x < cols; x++){
    	terrain [y][x] = map(noise(yoff,xoff), 0, 1, -90, 90);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  //console.log('Number of Columns are ' + terrain[0].length);
  //console.log('Number of Rows are ' + terrain.length);

  background(0, 0, 0);
  stroke(255);
  noFill();
  rotateX(PI/2.8);
  translate(-w/2, -h/2);

  for (y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
  	for (x = 0; x < cols; x++){
    	vertex(x*scl, y*scl, terrain[y][x]);
      vertex(x*scl, (y+1)*scl, terrain[y+1][x]);
    }
    endShape();
  }

  /*
 	for (y = 0; y < rows-1; y++){
    beginShape();
  	for (x = 0; x < cols; x++){
    	vertex(x*scl, y*scl, terrain[y][x]);
    }
    endShape();
  }
  */

}

let myp5 = new p5();
