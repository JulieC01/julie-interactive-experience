let jtown, donburi, festival;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //as long as you add the class "dragme" to the image, it should work.

    jtown = createImg('images/jtown.jpg')
    jtown.position(700, 300);
    jtown.class('dragme')

    donburi = createImg('images/donburi.jpg')
    donburi.position(700, 300);
    donburi.class('dragme')

    festival = createImg('images/festival.jpg')
    festival.position(700, 300);
    festival.class('dragme')


  }
  
  function draw() {
    background(0);

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
