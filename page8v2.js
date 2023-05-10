//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let izumidonburi, izumisushi1, izumisushi2, izumisushi3, izumisushi4, izumisushi5;

//declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;

var dragging = false; // Is the object being dragged? ignore this


//load sounds before you use them
function preload(){    //function that will load different files in before the rest of the thigns load. A way for pc to have all the assets available before the thing runs to avoid broken media and such

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/yakusoku.mp3');
  mySound2 = loadSound('audio/sketch.mp3');
  mySound3 = loadSound('audio/daylife.mp3');
  mySound4 = loadSound('audio/third.mp3');
  mySound5 = loadSound('audio/timeleap.mp3');
  mySound6 = loadSound('audio/bird.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    izumidonburi = createImg("images/izumidonburi.png");
    izumidonburi.class('place');
    izumidonburi.position(100, 50);

    izumisushi1 = createImg("images/izumisushi1.png");
    izumisushi1.class('place');
    izumisushi1.position(550, 50);

    izumisushi2 = createImg("images/izumisushi2.png");
    izumisushi2.class('place');
    izumisushi2.position(1000, 50);

    izumisushi3 = createImg("images/izumisushi3.png");
    izumisushi3.class('place');
    izumisushi3.position(100, 350);

    izumisushi4 = createImg("images/izumisushi4.png");
    izumisushi4.class('place');
    izumisushi4.position(550, 350);
    
    izumisushi5 = createImg("images/izumisushi5.png");
    izumisushi5.class('place');
    izumisushi5.position(1000, 350);
  }
  
  function draw() {
   
    izumidonburi.mousePressed(makeizumidonburi);
    izumisushi1.mousePressed(makeizumisushi1);
    izumisushi2.mousePressed(makeizumisushi2);
    izumisushi3.mousePressed(makeizumisushi3);
    izumisushi4.mousePressed(makeizumisushi4);
    izumisushi5.mousePressed(makeizumisushi5);
  }

  function makeizumidonburi() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeizumisushi1() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


 function makeizumisushi2() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeizumisushi3() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }


  function makeizumisushi4() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }
  
  function makeizumisushi5() {
    if (mySound6.isPlaying()){
      mySound6.pause();
    } else {
      mySound6.play();
    }
  }


  //function  toggleSound () {  <- The basic way to play sounds
 //   mySound1.play () ;
  //}

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
