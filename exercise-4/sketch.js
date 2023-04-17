//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let entrance, izumi, osakaya, nandeya, kushitsuru;

//declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5;

var dragging = false; // Is the object being dragged? ignore this


//load sounds before you use them
function preload(){    //function that will load different files in before the rest of the thigns load. A way for pc to have all the assets available before the thing runs to avoid broken media and such

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/yakusoku.mp3');
  mySound2 = loadSound('audio/sketch.mp3');
  mySound3 = loadSound('audio/daylife.mp3');
  mySound4 = loadSound('audio/third.mp3');
  mySound5 = loadSound('audio/timeleap.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, 1200);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    entrance = createImg("images/entrance.png");
    entrance.class('place');
    entrance.position(200, 300);

    izumi = createImg("images/izumi.png");
    izumi.class('place');
    izumi.position(700, 300);

    osakaya = createImg("images/osakaya.png");
    osakaya.class('place');
    osakaya.position(1200, 300);

    nandeya = createImg("images/nandeya.png");
    nandeya.class('place');
    nandeya.position(200, 800);

    kushitsuru = createImg("images/nandeya.png");
    kushitsuru.class('place');
    kushitsuru.position(700, 800);
    
  }
  
  function draw() {
    background(0);
    entrance.mousePressed(makeentrance);
    izumi.mousePressed(makeizumi);
    osakaya.mousePressed(makeosakaya);
    nandeya.mousePressed(makenandeya);
    kushitsuru.mousePressed(makekushitsuru);
  }

  function makeentrance() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeizumi() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


 function makeosakaya() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makenandeya() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }


  function makekushitsuru() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }


  //function  toggleSound () {  <- The basic way to play sounds
 //   mySound1.play () ;
  //}

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
