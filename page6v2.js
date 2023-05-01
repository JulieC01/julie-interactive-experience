let days = [];

let food;
//images!
let ramen, udon, soba, curry, sushi;

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

  if (food == "ramen"){
//removes past image from html before drawing a new one
  removeImg();
   ramen = createImg('images/kushiramen.png');
   ramen.id('images');
   ramen.position(500,200);
   ramen.size(400, 400);
    console.log("draw ramen")

  } else if (food == "udon") {
    removeImg();
   udon = createImg('images/kushiudon.png');
   udon.id('images');
   udon.position(500,200);
   udon.size(400, 400);
  }else if (food == "soba") {
    removeImg();
    soba = createImg('images/kushisoba.png');
    soba.id('images');
    soba.position(500,200);
    soba.size(400, 400);
  } else if (food == "curry") {
    removeImg();
    curry = createImg('images/kushicurry.png');
    curry.id('images');
    curry.position(500,200);
    curry.size(400, 400);
  } else if (food == "sushi"){
    removeImg();
    sushi = createImg('images/kushisushi.png');
    sushi.id('images');
    sushi.position(500,200);
    sushi.size(400, 400);
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