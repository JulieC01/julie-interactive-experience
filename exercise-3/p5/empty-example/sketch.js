
function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(400, 400);
    noLoop();

  }
  
  function draw() {

background (255);
fill(50);
 noStroke();


 ellipse(xpos, ypos, 40, 40);
 ellipse(xpos + xstep, ypos, 40, 40);
 ellipse(xpos + (xstep * 2), ypos, 40, 40);
 ellipse(xpos + (xstep * 3), ypos, 40, 40);
 ellipse(xpos + (xstep * 4), ypos, 40, 40);
  }
  
 