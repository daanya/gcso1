var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2)
  bullet.shapeColor = "white";
  wall.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(collided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor = "red";
    }
    if (damage<10){
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
}

function collided(b,w){
  bRightEdge = b.x + b.width;
  wLeftEdge = w.x;
  if (bRightEdge >= wLeftEdge){
    return true;
  }
  return false;
}