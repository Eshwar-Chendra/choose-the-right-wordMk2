var words=[];
var definitions=[];
var rand;
var box1;
var box2;
var box3;
var box4;

function preload(){
  bookImage=loadImage("book.png");

}
function setup() {
  createCanvas(1500,1500);
  words=["outline","termination","missing","procrastinating"];
  definitions=["A line or set of lines enclosing or indicating the shape of an object in a sketch or diagram.",
               "The action of terminating something or the fact of being terminated.",
               "Not present or included when expected or supposed to be.",
               "Delay or postpone action; put off doing something."]
  rand=Math.round(random(0,3));
  box1=createSprite(870,700,40,40);
  box2=createSprite(970,700,40,40);
  box3=createSprite(1070,700,40,40);
  box4=createSprite(1170,700,40,40);
  
}


function draw() {
  background(bookImage); 
  textSize(30);
  fill(0);
  text(words[rand],370,350); 
  textSize(15);
  text("A.",770,175);
  text("B.",770,275);
  text("C.",770,375);
  text("D.",770,475);
  text(definitions[0],770,200);
  text(definitions[1],770,300);
  text(definitions[2],770,400);
  text(definitions[3],770,500);
  if (mousePressedOver(box1)&&rand===0){
    text("correct",970,900);
  }
  if (mousePressedOver(box2)&&rand===1){
    text("correct",970,900);
  }
  if (mousePressedOver(box3)&&rand===2){
    text("correct",970,900);
  }
  if (mousePressedOver(box4)&&rand===3){
    text("correct",970,900);
  }

  drawSprites();
}