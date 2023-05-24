//CREATING BOW, BALLOONS, EDGES, BACKGROUND, ARROW AS SPRITES
  var bowarrow, bow_running, edges;
  var ground, groundImage;
  var redballoon, blueballoon, greenballoon, pinkballoon;
  var balloonr, balloonb, balloong, balloonp;
  var arrowrunning, arrow;  
  

  function preload(){
  
//LOADING IMAGES FOR BOW, BALLOONS, BACKGROUND, ARROW 
  bow_running = loadImage("bow0.png");
  
  groundImage = 
     loadImage("background0.png","background20.png"); 

  balloonr = loadImage("red_balloon0.png");
  balloonb = loadImage("blue_balloon0.png");
  balloong = loadImage("green_balloon0.png");
  balloonp = loadImage("pink_balloon0.png");

  arrowrunning = loadImage("arrow0.png");
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

//CREATING THE BALLOONS
  for(var r = 50; r < 350; r = r + 50){
  redballoon = createSprite(r, 90 , 5, 5);  
  redballoon.addImage(balloonr);
  redballoon.scale = 0.0955;
}
  for(var b = 50; b < 350; b = b + 50){
  blueballoon = createSprite(b, 150 , 5, 5);  
  blueballoon.addImage(balloonb);
  blueballoon.scale = 0.1;
}
  for(var g = 50; g < 350; g = g + 50){
  greenballoon = createSprite(g, 220 , 5, 5);  
  greenballoon.addImage(balloong);
  greenballoon.scale = 0.0955;
}
  for(var p = 50; p < 350; p = p + 50){
  pinkballoon = createSprite(p, 290 , 5, 5);  
  pinkballoon.addImage(balloonp);
  pinkballoon.scale = 1.4;
}
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
