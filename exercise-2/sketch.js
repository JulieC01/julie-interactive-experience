let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let tea = document.getElementById('tea');


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');


  }
  
  function draw() {

    removeElements();
    //lets manipulate the DOM and make our cat move with the arrow keys
    //create an image element in html
    let bunny = createImg("images/bunny.png");
    //select size of image
    bunny.size(200,317);
     // give it an id
     bunny.id('bunny');

    //set the position
    //create arithmatic for x and y position. this lets us read out the position
    xpos = width/2-200+x;
    ypos = height/2-200+y;

  
    //position the cat based on the arrow keys
    bunny.position(xpos, ypos);


//controls using arrow keys
    if (keyIsPressed){
      if(keyCode == UP_ARROW){

        //minus 5 in the y direction means up
        y-=5;
        
      } 
      
      if(keyCode == RIGHT_ARROW) {

        //plus 5 in the x direction means right
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {

        //plus 5 in the y direction means down
        y+=5;
      }

      if(keyCode == LEFT_ARROW) {

        //minus 5 in the x direction means left
        x-=5;
      }

      if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
        //make bear appear
        tea.style.display='block';
      }

      if ((xpos<400) && (ypos<400)){

        //hide bear again
        tea.style.display='none';

        //change scene to the next to the next one by adding 1 each time
        mode = 2;
        console.log(mode);
      }

      //changing of scenes
      if (mode == 2){
        background(0);
        tea.style.display='none';
      }
    }

    // console.log("cat is at: " + xpos + ", " + ypos);
  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
  
}



