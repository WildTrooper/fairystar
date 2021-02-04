const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bgImage,bg;
var fairy,fairyImage;
var starImage,star;

function preload(){
bgImage=loadImage("starnight.png")
fairyImage=loadAnimation("fairy1.png","fairy2.png")
starImage=loadImage("star.png")
}


function setup() {
  createCanvas(800, 750);
  background("white")

  bg = createSprite(400,370.800,800)
  bg.addImage(bgImage)

  fairy= createSprite (100,600)
  fairy.addAnimation("flyingFairy",fairyImage);
  fairy.scale = 0.3

  star = createSprite(700,100,20,20)
  star.addImage(starImage)
  star.scale = 0.4
  }
  



function draw() {
  if(keyDown("left_arrow")){
  fairy.x -= 5
  }
  if(keyDown("right_arrow")){
  fairy.x += 5
 }
 if(keyDown("down_arrow")){
 star.velocityY = 4
}
if (star.position.y > 470){
  Matter.body.setStatic(star,true)
}
 drawSprites();
}
