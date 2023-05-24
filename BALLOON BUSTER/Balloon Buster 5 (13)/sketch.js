//CREATING OBJECTS AS SPRITES
  var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
  var bowImage, arrowImage, green_balloonImage, red_balloonImage,    pink_balloonImage ,blue_balloonImage, backgroundImage;

 
 function preload(){
  
//LOADING BACKGROUND IMAGE
   backgroundImage = loadImage("background0.png");
  
//LOADING ARROW IMAGE
   arrowImage = loadImage("arrow0.png");
   
//LOADING BOW IMAGE
   bowImage = loadImage("bow0.png");

//LOADING BALLOON IMAGES 
   red_balloonImage = loadImage("red_balloon0.png");
   green_balloonImage = loadImage("green_balloon0.png");
   pink_balloonImage = loadImage("pink_balloon0.png");
   blue_balloonImage = loadImage("blue_balloon0.png");
}


 function setup(){
   
//SIZE FOR CANVAS
   createCanvas(600, 420);
  
//CREATING BACKGROUND
   background = createSprite(0,0,600,600);
   background.addImage(backgroundImage);
   background.scale = 2.5;
   
//CREATING BOW
   bow = createSprite(480,220,20,50);
   bow.addImage(bowImage); 
   bow.scale = 1;
  
//CREATING SCORE
   score = 0;  
   
//CREATING GROUPS FOR BALLOONS AND ARROW
   redB = new Group();
   blueB = new Group();
   greenB = new Group();
   pinkB  = new Group();
  
   arrowGroup = new Group();
}


 function draw() {

//MOVING THE GROUND
   background.velocityX = -3 

//REPEATING THE GROUND IMAGE TO SHOW THAT THE GROUND IS MOVING
  if (background.x < 0){
   background.x = background.width/2;
}
  
//MOVING THE BOW
   bow.y = World.mouseY
  
//RELEASE ARROW WHEN SPACE KEY IS PRESSED
  if (keyDown("space")) {
   createArrow();
}
  
//GIVING CHOICES FOR THE COMPUTER TO SELECT THE DIFFERENT BALLOONS
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
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

//WHEN THE ARROW TOUCHES THE BALLOONS THE BALLOON AND THE ARROW SHOULD DISAPPEAR AND THE SCORE SHOULD INCREASE
  if(arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
   score = score + 1;
}
  
  if(arrowGroup.isTouching(blueB)){
   blueB.destroyEach();
   arrowGroup.destroyEach();
   score = score + 4;
}
  
  if(arrowGroup.isTouching(greenB)){
   greenB.destroyEach();
   arrowGroup.destroyEach();
   score = score + 2;
}
  
  if(arrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   arrowGroup.destroyEach();
   score = score + 1;
}
  
//COMMAND FOR DRAWING THE SPRITES
   drawSprites();
   
//SHOWING THE SCORE
   text("Score: "+ score, 500,50);
}


//FUNCTION FOR RED BALLOON
 function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   redB.add(red);
   red.debug = true;
   red.setCollider("circle", 0, 0, 0);
}


//FUNCTION FOR BLUE BALLOON
 function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
   blue.addImage(blue_balloonImage);
   blue.velocityX = 3;
   blue.lifetime = 150;
   blue.scale = 0.1;
   blueB.add(blue);
   blue.debug = true;
   blue.setCollider("circle", 0, 0, 0);
}


//FUNCTION FOR GREEN BALLOON
 function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
   green.addImage(green_balloonImage);
   green.velocityX = 3;
   green.lifetime = 150;
   green.scale = 0.1;
   greenB.add(green);
   green.debug = true;
   green.setCollider("circle", 0, 0, 0);
}


//FUNCTION FOR PINK BALLOON
 function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
   pink.addImage(pink_balloonImage);
   pink.velocityX = 3;
   pink.lifetime = 150;
   pink.scale = 1.4;
   pinkB.add(pink);
   pink.debug = true;
   pink.setCollider("circle", 0, 0, 0);
}


//CREATING FUNCTION FOR ARROW
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
   arrow.addImage(arrowImage);
   arrow.x = 360;
   arrow.y = bow.y;
   arrow.velocityX = -4;
   arrow.lifetime = 100;
   arrow.scale = 0.3;
   arrowGroup.add(arrow);
}
