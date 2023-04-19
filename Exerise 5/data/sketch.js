let days = [];

let place, food, dessert;
//images!
let outside,inside,sushi,ramen,icecream,pastry,dango;

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

  background(0);


//if you put button in html instead, it would empty the array and refresh the page.
    
}

function draw() {

  place = document.getElementById('place').value;
  food = document.getElementById('food').value;
  dessert = document.getElementById('dessert').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}



function glyph(){
  background(0);
  if (place == "outside"){
//removes past image from html before drawing a new one
  removeImg();
   outside = createImg('images/outside.png');
   outside.id('images');
   outside.position(100,200);

   outside.size(400, 300);
    console.log("draw outside")

  } else if (place == "inside") {
    removeImg();
   inside = createImg('images/inside.png');
   inside.id('images');
   inside.position(100,200);
   inside.size(400, 300);
  }
  if (food == 'sushi'){
    removeImg();
    sushi = createImg('images/sushi.png');
    sushi.id('images');
    sushi.position(500,200);
    sushi.size(400, 400);
  } else if (food == 'ramen'){
     removeImg();
    ramen = createImg('images/ramen.png');
    ramen.id('images');
    ramen.position(500,200);
    ramen.size(400, 400);
  }
  
  if(dessert == "icecream"){
    icecream = createImg('images/icecream.png');
    icecream.id('images');
    icecream.position(900,200);
    icecream.size(400, 400);
  }else if (dessert == "pastry"){
    pastry = createImg('images/pastry.png');
    pastry.id('images');
    pastry.position(900,200);
    pastry.size(400, 400);
  } else if(dessert =="dango"){
    dango = createImg('images/dango.png');
    dango.id('images');
    dango.position(900,200);
    dango.size(400, 400);
  }
  strokeWeight(10);
  line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



}

function add() {
  
  days.push({
    date: Date(),
    place: place,
    food : food,
    dessert: dessert
  })
  console.log(days);
  console.log("day submitted")
  console.log('place: '+ place)
  console.log('food: '+ food);
  console.log('dessert: '+ dessert);
  glyph();

}

function removeImg(){
  //if there is an image, remove it before making a new one
  if(element.length == 1){
    //the first image in the array, remove it
    element[0].remove();
  }
}