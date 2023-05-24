//CREATING OBJECTS AS SPRITES
 var bow , arrow,  background;
 
 var bowImage, arrowImage, green_balloonImage, red_balloonImage,              pink_balloonImage ,blue_balloonImage, backgroundImage;
 
 var score;

 
 function preload(){
  
//LOADING THE IMAGES
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}


function setup() {
 
//GIVING DIMENSIONS FOR THE CANVAS
  createCanvas(600, 420);
  
//CREATING BACKGROUND
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
//CREATING BOW
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
//CREATING THE SCORE
  score = 0;
}


 function draw() {
//REPEATING THE GROUND BY MOVING THE IMAGE OF THE GROUND
  background.velocityX = -3; 

 if (background.x < 0){
  background.x = background.width/2;
}
  
//MOVING THE BOW VERTICALLY
  bow.y = World.mouseY;
  
//GIVING COMMAND FOR RELEASING THE ARROW WHEN SPACE KEY IS PRESSED
 if (keyDown("space")) {
  var temp_arrow = createArrow();
  temp_arrow.addImage(arrowImage);
  temp_arrow.y = bow.y;
}
   
//GIVING OPTIONS FOR THE COMPUTER FOR CHOOSING ANY BALLOON 
 var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
 if (World.frameCount % 80 == 0) {
 if (select_balloon == 1) {
  redBalloon();
} else if (select_balloon == 2) {
  greenBalloon();
} else if (select_balloon == 3) {
  blueBalloon();
} else {
  pinkBalloon();
}
}

//GIVING COMMAND FOR DRAWING SPRITES
  drawSprites();
   
//COMMAND FOR SHOWING SCORE
  textSize = 20;
  text("Score: "+ score, 500, 50);
}


//FUNCTION FOR RED BALLOON
 function redBalloon() {
 var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 100;
  red.scale = 0.1
}


//FUNCTION FOR BLUE BALLOON
 function blueBalloon() {
 var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 100;
  blue.scale = 0.1
}


//FUNCTION FOR GREEN BALLOON
 function greenBalloon() {
 var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 100;
  green.scale = 0.1
}

 
//FUNCTION FOR PINK BALLOON
 function pinkBalloon() {
 var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 100;
  pink.scale = 1.5;
}


//FUNCTION FOR CREATING ARROWS
 function createArrow() {
  arrow = createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  return arrow;
}

