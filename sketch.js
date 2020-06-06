var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(400,400,100,20);
  gameobject1.shapeColor="red";
  gameobject2=createSprite(700,400,50,90);
  gameobject2.shapeColor="yellow";
  gameobject3=createSprite(10,200,20,150);
  gameobject3.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collide(movingRect,gameobject3)){
    movingRect.shapeColor = "cyan";
  gameobject3.shapeColor = "cyan";
  }
  else{

    movingRect.shapeColor = "green";
gameobject3.shapeColor = "yellow";
  }
  drawSprites();
}
