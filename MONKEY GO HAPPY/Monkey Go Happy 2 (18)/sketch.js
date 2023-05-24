//CREATING VARIABLES FOR, GAME STATES, LOADING IMAGES, MONKEY, BANANA, JUNGLE, SCORE, GROUPS, INVISIBLE GROUND
   var PLAY = 1;
   var END = 0;
   var gameState = 1;

   var monkey, monkeyI;
   var bananaI, obstacleI;

   var obstaclesGroup, foodGroup;

   var jungle, jungleI, INV;

   var score;


 function preload(){
     
//LOADING IMAGES FOR:
   
//MONKEY
     monkeyI = loadAnimation("Monkey_01.png","Monkey_02.png",
                             "Monkey_03.png","Monkey_04.png",
                             "Monkey_05.png","Monkey_06.png",
                             "Monkey_07.png","Monkey_08.png",
                            "Monkey_09.png","Monkey_10.png");
   
//BANANA
     bananaI = loadImage("banana.png");
     
//OBSTACLES
     obstacleI = loadImage("stone.png");
   
//JUNGLE
     jungleI = loadImage("jungle.jpg");
}


 function setup(){
   
//CREATING CANVAS
     createCanvas(600, 400);
   
//CREATING SPRITES AND ADDING IMAGES FOR:
   
//JUNGLE
     jungle = createSprite(200, 200, 0, 1);
     jungle.addImage("background", jungleI);
   
//MONKEY
     monkey = createSprite(80, 350);
     monkey.addAnimation("animal", monkeyI);
     monkey.scale = 0.1;
   
//INVISIBLE GROUND
     INV = createSprite(0, 375, 400, 10);
     INV.visible = false;
    
//SETTING SCORE AS 0
     score = 0;
   
//SETTING THE foodGroup AND obstaclesGroup AS A NEW GROUP
     foodGroup = new Group();
     obstaclesGroup = new Group(); 
}


 function draw() {
   
//SETTING BACKGROUND
     background(220);
  
//SETTING THE COMMANDS WHEN THE GAME STATE IS PLAY
  if(gameState === PLAY){
    
//MAKING THE JUNGLE MOVE
     jungle.velocityX = -4;
  
//MAKING THE JUNGLE IMAGE REPEAT
  if(jungle.x < 0){
     jungle.x = jungle.width/2;
}
 
//MAKING THE MONKEY JUMP WHEN SPACE KEY IS PRESSED
  if(keyDown("space")){
     monkey.velocityY = -12;
}
    
//GIVING GRAVITY TO THE MONKEY
     monkey.velocityY = monkey.velocityY + 0.9;
  
//COLLIDING THE MONKEY ON THE INVISIBLE GROUND
     monkey.collide(INV);
   
//INCREASING THE SCORE WHEN THE MONKEY TOUCHES/EATS THE BANANA
  if(foodGroup.isTouching(monkey)){
     score = score + 2;
     monkey.scale = monkey.scale + 0.05;
     foodGroup.destroyEach();
}
  
//THE SIZE OF THE MONKEY SHOULD BE 0.08 AND THE SCORE SHOULD DECREASE BY 2 WHEN THE MONKEY THE ROCK(FIRST TIME)
  if(obstaclesGroup.isTouching(monkey)){
     monkey.scale = 0.08;
     score = score - 2;  
} 
    
//GAME STATE SHOULD BE END WHEN THE MONKEY HITS THE ROCK
  if(obstaclesGroup.isTouching(monkey) && monkey.scale === 0.08){
     gameState = END;
}
    
//CALLING THE FUNCTIONS
     food();
     obstacles(); 
}

//GAME STATE CHANGES TO END 
  if(gameState === END){
     
//THE JUNGLE SHOULD STOP MOVING AND THE MONKEY SHOULD STOP JUMPING EVEN IF SPACE KEY IS PRESSED 
     jungle.velocityX = 0;
     monkey.velocityY = 0;
    
//THE MONKEY SHOULD BE DESTROYED
    monkey.destroy();
    
//THE GROUPS SHOULD STOP MOVING (FOOD AND OBSTACLES)
     foodGroup.setVelocityXEach(0);
     obstaclesGroup.setVelocityXEach(0);   
    
//THE GROUPS SHOULD NOT THE REACH THE ENDING IF THE SCREEN
     foodGroup.setLifetimeEach(-1);   
     obstaclesGroup.setLifetimeEach(-1);
    
//THE GROUP SHOULD BE DESTROYED
     foodGroup.destroyEach();
     obstaclesGroup.destroyEach();
}
 
//COMMAND FOR DRAWING SPRITES
     drawSprites();
   
//DISPLAYING THE TEXT
     fill("white");
     textSize(20);
     text("Score: " + score, 300, 50);
}


//FUNCTION FOR FOOD
 function food(){
  if(frameCount % 90 === 0){
   var banana = createSprite(600, 200, 20, 20);
     banana.y = Math.round(random(120, 200));
     banana.addImage("food", bananaI);
     banana.scale = 0.05;
     banana.velocityX = -5;
      
     banana.lifetime = 200;
    
     foodGroup.add(banana);
}
}
   

//FUNCTION FOR OBSTACLES
 function obstacles(){
  if(frameCount % 300 === 0){
   var rock = createSprite(600, 350, 20, 20);
     rock.addImage("obstacle", obstacleI);
     rock.scale = 0.2;      
     rock.velocityX = -6;
      
     rock.lifetime = 200; 
      
     obstaclesGroup.add(rock);
}  
}
