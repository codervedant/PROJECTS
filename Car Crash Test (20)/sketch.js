//CREATING OBJECTS AS VARIABLES FOR;
//CAR AND WALL
   var car, wall;

//SPEED, WEIGHT
   var speed, weight;
   

 function setup() {
  
//CREATING CANVAS
     createCanvas(1600,400);
  
//CREATING CAR AS A SPRITE
     car = createSprite(50, 200, 50, 50);

//CREATING WALL AS A SPRITE
     wall = createSprite(1500, 200, 60, height/2);
  
//RANDOM VALUES FOR SPEED AND WEIGHT OF CARS
     speed = random(55, 90);
     weight = random(400, 1500);
}


 function draw() {
  
//SETTING BACKGROUND COLOR
     background("lightgrey");  
  
//COLOR FOR WALL AND CAR
     wall.shapeColor = color(80, 80, 80);
     car.shapeColor = color(255, 255, 255);
     
//RANDOM SPEED FOR CAR
     car.velocityX = speed;

//COMMAND FOR WHEN THE RANDOM CARS OF RANDOM WEIGHT HITS THE WALL 
//WHAT WILL BE THE COLOR WHEN THE CAR HITS THE WALL 
  if(wall.x - car.x < (car.width + wall.width) /2){
     
     car.velocityX = 0;

   var deformation = 0.5 * weight * speed * speed/22509;

  if(deformation > 180){
     car.shapeColor = color(255, 0, 0);
}
  
  if(deformation > 100 && deformation < 180){
     car.shapeColor = color(230, 230, 0);
}

  if(deformation < 100){
     car.shapeColor = color(0, 255, 0);
}
}
  
     drawSprites();
}