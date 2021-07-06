var paddle1,paddle2,ball
function setup() {
  createCanvas(400,400);
   paddle1= createSprite(10,200,10,100);
  paddle1.shapeColor="orange";

 paddle2=createSprite(390,200,10,100);
paddle2.shapeColor="orange";

 ball=createSprite(200,200,10,10)
ball.shapeColor="orange";
}

function draw() 
{
  background("blue");
  

paddle1.y=mouseY;
paddle2.y=mouseY;
ball.x=mouseX;
ball.y=mouseY;

  drawSprites();



}




