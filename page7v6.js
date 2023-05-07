let days = [];

let food;
//images!
let friedrice, sushi, yakisoba, gyoza;

let enter, entered;



let body = document.getElementById('html-body');
//returns an array of all the html elements that are <img> tags
const element = document.getElementsByTagName('img');

let spacex = 0;
let spacey = 0;






function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered); //puts into html body instead of being at the bottom
  enter.mousePressed(add); 
enter.position (500,110);
 


//if you put button in html instead, it would empty the array and refresh the page.
    
}

function draw() {

  food = document.getElementById('food').value;
  

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}



function glyph(){

  if (food == "friedrice"){
//removes past image from html before drawing a new one
  removeImg();
  friedrice = createImg('images/benifriedrice.png');
  friedrice.id('images');
  friedrice.position(500,200);
  friedrice.size(400, 400);
    console.log("draw friedrice")
} else if (food == "sushi"){
    removeImg();
    sushi = createImg('images/benisushi.png');
    sushi.id('images');
    sushi.position(500,200);
    sushi.size(400, 400);
  } else if (food == "yakisoba") {
    removeImg();
    yakisoba = createImg('images/beniyakisoba.png');
    yakisoba.id('images');
    yakisoba.position(500,200);
    yakisoba.size(400, 400);
  }else if (food == "gyoza") {
    removeImg();
    gyoza = createImg('images/benigyoza.png');
    gyoza.id('images');
    gyoza.position(500,200);
    gyoza.size(400, 400);
  } 

  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }

if(element.length == 1){
    console.log('working')
    element[0].remove;
  }

}

function add() {
  
  days.push({
    date: Date(),
    food: food,
    
  })
  console.log(days);
  console.log("day submitted")
  console.log('food: '+ food)
  
  glyph();

}

function removeImg(){
  //if there is an image, remove it before making a new one
  if(element.length == 1){
    //the first image in the array, remove it
    element[0].remove();
  }
}