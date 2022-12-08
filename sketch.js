
var seaImg, sea;
var shipImg , ship;

function preload(){
  sea = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
 
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(230,170,20,40);
  sea.addImage(seaImg);
  sea.velocitX = 3;
  
}

function draw() {
  background("blue");
 if (sea.x <0){
  sea.x=sea.width/2;
 }
 drawsprites();
}