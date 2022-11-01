//variables
var circleSize;
var inp;
var wordSize;
var inp2;
var effectSize;

wordSize=30;
circleSize=200;
effectSize=30;
let colorPicker;
let colorPicker2;
let colorPicker3;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(25, 50);
  
  //circle
  colorPicker2 = createColorPicker('#0000FF');
  colorPicker2.position(25, 100);
 
  //words
    //circle
  colorPicker3 = createColorPicker('#50C878');
  colorPicker3.position(25, 150);
  inp = createInput('');
  inp.position(0, 0);
  inp.size(100);
  
  inp2 = createInput('');
  inp2.position(0, 20);
  inp2.size(100);
  
}

function draw() {

//background
background(colorPicker.color());

//background words
textSize(effectSize);
fill(colorPicker2.color())
text(inp2.value(), random(width), random(height));

  //circle
noStroke();
fill(colorPicker2.color())
ellipse(width/2,height/2,circleSize);
 
//words
fill (colorPicker3.color())
textSize(wordSize);
textAlign(CENTER,CENTER)
text(inp.value(), (width/2),(height/2));
    if (keyIsPressed) {

    if (key =='2'){
    circleSize = circleSize + 5;
  }
    else if (key =='1'){
      circleSize = circleSize - 5
    }
      if (keyIsPressed) {

    if (key =='4'){
    wordSize = wordSize + 5;
  }
    else if (key =='3'){
      wordSize = wordSize - 5
    }
         if (keyIsPressed) {

    if (key =='6'){
    effectSize = effectSize + 5;
  }
    else if (key =='5'){
      effectSize = effectSize - 5
    }
    }}}}