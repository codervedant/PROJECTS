//CREATING BOW, BALLOONS, EDGES, BACKGROUND, ARROW AS SPRITES
  var bowarrow, bow_running;
  var ground, groundImage;
  var redballoon, blueballoon, greenballoon, pinkballoon;
  var arrowrunning, arrow;  
  

 function preload(){
  
//LOADING IMAGES FOR BOW, BALLOONS, BACKGROUND, ARROW 
  bow_running = loadImage("bow0.png");
  
  groundImage = 
     loadImage("background0.png","background20.png"); 

  arrowrunning = loadImage("arrow0.png");
   
  redballoon = loadImage("red_balloon0.png");
  blueballoon = loadImage("blue_balloon0.png");
  greenballoon = loadImage("green_balloon0.png");
  pinkballoon = loadImage("pink_balloon0.png");
}


 function setup() {
  
//CREATING THE CANVAS
  createCanvas(600, 420);
  
//CREATING THE GROUND
  ground = createSprite(0, 0, 600, 600);
  ground.addImage("ground", groundImage);
  ground.scale = 2.5;
  ground.x = ground.width /3;
  ground.velocityX = -5;
 
//CREATING THE BOW
  bowarrow = createSprite(400, 175, 20, 20);
  bowarrow.addImage("bow", bow_running);
  bowarrow.x = 500;
 } 

 function draw() {

//REPEATING THE IMAGE OF THE GROUND 
 if(ground.x < 0){
  ground.x = ground.width/3;
}

//GIVING COMMAND TO MOVE THE BOW AND THE ARROW
  bowarrow.y = World.mouseY;
 
//GIVING COMMAND FOR SHOOTING THE ARROW  
 if (keyDown("space")) {
  var arrow1 = Arrow();
  arrow1.addImage(arrowrunning);
  arrow1.y = bowarrow.y;
}
  spawnBalloons();

//GIVING COMMAND FOR DRAWING SPRITES  
  drawSprites();
}


//FUNCTION FOR CREATING ARROW
 function Arrow(){
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;

}


//FUNCTION FOR CREATING THE BALLOONS
 function spawnBalloons(){
 if(frameCount % 90 === 0){
  var balloons = createSprite(0, Math.round(random(50, 300)), 5, 5);
  balloons.velocityX = 4;
   
  var rand = Math.round(random(1, 4));
  
  switch(rand){
  
  case 1 : balloons.addImage(redballoon);
  balloons.lifetime = 100;
  balloons.scale = 0.12;
  
  break;
    
  case 2 : balloons.addImage(blueballoon);
  balloons.lifetime = 100;
  balloons.scale = 0.14;
  
  break;
        
  case 3 : balloons.addImage(greenballoon);
  balloons.lifetime = 100;
  balloons.scale = 0.11;
  
  break;
        
  case 4 : balloons.addImage(pinkballoon);
  balloons.lifetime = 100;
  balloons.scale = 1.6;
    
  break;
      
  default : break;
}
}
}