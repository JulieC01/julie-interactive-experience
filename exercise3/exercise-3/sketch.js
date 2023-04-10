let input, button, result, question, submit, answer;
//global is variable on top that makes it available 
//throughout rather than in functions, so don't need to say let. 
//So can use variable result again elsewhere than in just a function.
let Answer1;
//let c;// lets have to be on top
let colorInput = document.getElementById('color-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'What food would you like to eat at Japantown right now?');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');  //answer variable becomes answer, document is a key part of js, term to document this is what that elemant is.
    //allows you to place this into any html file
    colorInput.appendChild(answer);  //grabbing the element that have variable answer. Above says theres element of color. This one create a container for the elements within color
//append means placing child to be with the parent container/div
    //answer and colorinput line is saying the paragraph is that.


    input = createInput(''); //creating a input element. Input is where u type in the box, giving it the ID question below
    input.id('question');

    question = document.getElementById('question'); //giving id by question
    colorInput.appendChild(question); //putting it into colorinput again

  
    button = createButton('submit');
    button.id('submit'); //has id of submit
    submit = document.getElementById('submit'); 
    colorInput.appendChild(submit); //putting into colorinput
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() { 
  const answers = input.value(); //const is another initializing word like Let. Const says is staying thr same, let changes.
  input.value(''); 

  let answer1 = createP(''); //input value is empty, need it to read value and find the one ur looking for
  answer1.id('answer-1')     //give id of answer-1
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px'); 

  let Answer1 = document.getElementById('answer-1'); 
  colorInput.appendChild(Answer1); //documenting its id, grabbing that element and giving it a variable
  Answer1.innerHTML = answers; // a method where ur changing the words inside paragraph tag. Based on these conditional statements, the string it returns is different
//innerhtml is just saying to change what the html is

let picture = document.createElement('img');


  
  

  if ((answers == "ramen") || (answers == "Ramen")) { //if what I've written... == is just checking that char is all the same, === evaluate data as well
    picture.src = './images/ramenrec.png'; 
    Answer1.innerHTML = answers; 
    let a = createA('next.html', 'next');  
    a.id('next'); //make id of next
    colorInput.appendChild(next);
    next.appendChild(picture);
    
  } else if ((answers == "curry") || (answers == "Curry")){
    picture.src = './images/curryrec.png'; 
    Answer1.innerHTML = answers; 
    let a = createA('next2.html', 'next');  
    a.id('next2'); //make id of next
    colorInput.appendChild(next2);
    next2.appendChild(picture);
  } else if ((answers == "sushi") || (answers == "Sushi")){
    picture.src = './images/sushirec.png'; 
    Answer1.innerHTML = answers; 
    let a = createA('next3.html', 'next');  
    a.id('next3'); //make id of next
    colorInput.appendChild(next3);
    next3.appendChild(picture);
  }  else if ((answers == "takoyaki") || (answers == "Takoyaki")){
    picture.src = './images/takoyakirec.png'; 
    Answer1.innerHTML = answers; 
    let a = createA('next4.html', 'next');  
    a.id('next4'); //make id of next
    colorInput.appendChild(next4);
    next4.appendChild(picture);
   } else if ((answers == "udon") || (answers == "Udon")){
    picture.src = './images/udonrec.png'; 
    Answer1.innerHTML = answers; 
    let a = createA('next5.html', 'next');  
    a.id('next5'); //make id of next
    colorInput.appendChild(next5);
    next5.appendChild(picture);
   } else {
    Answer1.innerHTML = "Please choose another food";
  }
}

