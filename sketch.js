var bike,biker;
var bgImg;
var ground;

function preload(){
  bike=loadAnimation("images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png","images/c6.png");
  bgImg=loadAnimation("images/bg 4.jpg","images/bg 2.jpg");
}
function setup(){
 createCanvas(1200,600);

 ground=createSprite(600,300);
 ground.addAnimation("background",bgImg);
 ground.scale=1.25;
 ground.velocityX=-4;

 biker=createSprite(200,500);
 biker.addAnimation("bike_running",bike);
 biker.scale=1.75;
 
}

function draw(){
 background("black");

 drawSprites();
}