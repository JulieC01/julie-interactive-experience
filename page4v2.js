let days = [];

let food;
//images!
let ramen, udon, nabeyaki, curryrice, curryudon, donburi, sushi;

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
   ramen = createImg('images/osakayaramen.png');
   ramen.id('images');
   ramen.position(500,200);
   ramen.size(400, 400);
    console.log("draw ramen")

  } else if (food == "udon") {
    removeImg();
   udon = createImg('images/osakayaudon.png');
   udon.id('images');
   udon.position(500,200);
   udon.size(400, 400);
  }else if (food == "nabeyaki") {
    removeImg();
    nabeyaki = createImg('images/osakayanabeyaki.png');
    nabeyaki.id('images');
    nabeyaki.position(500,200);
    nabeyaki.size(400, 400);
  } else if (food == "curryrice") {
    removeImg();
    curryrice = createImg('images/osakayacurryrice.png');
    curryrice.id('images');
    curryrice.position(500,200);
    curryrice.size(400, 400);
  } else if (food == "curryudon"){
    removeImg();
    curryudon = createImg('images/osakayacurryudon.png');
    curryudon.id('images');
    curryudon.position(500,200);
    curryudon.size(400, 400);
  } else if (food == "donburi"){
    removeImg();
    donburi = createImg('images/osakayadonburi.png');
    donburi.id('images');
    donburi.position(500,200);
    donburi.size(400, 400);
  } else if (food == "sushi"){
    removeImg();
    sushi = createImg('images/osakayasushi.png');
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