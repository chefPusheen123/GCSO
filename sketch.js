var car,wall;
var speed,weight;

function setup() {
 createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;
deformation=0.5 * weight * speed * speed/22500;
}

function draw() {
  background(0);  
  drawSprites();
  if (car.isTouching(wall)&&deformation<100){
    car.velocityX=0;
car.shapeColor="green";


  }
  if (car.isTouching(wall)&&deformation>100&&deformation<180){
    car.velocityX=0;
    car.shapeColor="yellow";
    
    
      }
      if (car.isTouching(wall)&&deformation>180){
        car.velocityX=0;
        car.shapeColor="red";
        
        
          }


}