var thickness,wall;
var speed,weight,bullet;

function setup()
{  
    createCanvas(1600,400);
    speed=random(223,321);
    weight=random(32,52);
    thickness=random(22,83);
    bullet=createSprite(50,200,50,50);
    bullet.shapeColor="white";
    bullet.velocityX=speed;
    wall=createSprite(1200,200,thickness,200);
    wall.shapeColor=rgb(80,80,80);
}

function draw()
{
    background(0);
    drawSprites;
    c();
    if(c(bullet,wall))
    {if(c(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*32*223*223/70*70*70;

  if(damage>10)
  {
    wall.shapeColor=red(225,0,0);
  }
   if(damage<10)
   {
      wall.shapeColor=green(0,225,0);
   }
}
    }
        
}

function c(bullet1,wall1)
{

bulletRightEdge=bullet1.x+bullet1.width;
wallLeft=wall1.x;
if(bulletRightEdge>=wallLeftEdge)
   {
      return true
   }  
       return false;
  

}
