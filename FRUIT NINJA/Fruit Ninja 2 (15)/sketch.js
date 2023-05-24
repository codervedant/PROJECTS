//CREATING OBJECTS AND IMAGES AS SPRITES
   var knife, knifeI;
   var enemyGroup, monster, monstera, fruitGroup;
   var PLAY = 1;
   var END = 0;
   var gameState = 1;
   var fruit, fruit1, frui2, fruit3, fruit4;
   var choppingplate, backgroundI; 
   var score;
   var gameOverI, gameOver;
   var Gameover, knifecut;
   
    
 function preload(){

//LOADING IMAGES FOR = 
//KNIFE
    knifeI = loadImage("sword.png");
    
//FRUITS
    fruit1 = loadImage("fruit1.png");
    fruit2 = loadImage("fruit2.png");
    fruit3 = loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png");
   
//ENEMY
    monstera = loadAnimation("alien1.png", "alien2.png");
   
//GAME OVER TEXT
    gameOverI = loadImage("gameover.png");
    
//BACKGROUND
    backgroundI = loadImage("wooden background.png");
    
//LOADING SOUND FOR =
//CUTTING THE KNIFE
    knifecut = loadSound("knifeSwooshSound.mp3");
   
//KNIFE TOUCHES THE ENEMY
    Gameover = loadSound("gameover.mp3");
}
    
    
 function setup(){
    
//CREATING CANVAS
    createCanvas(600, 600);
   
//CREATING CHOPPING PLATE AS BACKGROUND
    choppingplate = createSprite(200, 200, 20, 20);
    choppingplate.addImage("wooden", backgroundI);
    choppingplate.scale = 1; 
   
//CRRATING KNIFE
    knife = createSprite(300, 300, 20, 20);
    knife.addImage("sword", knifeI);
    knife.scale = 0.7;
   
//CREATING "GAME OVER" TEXT AS A IMAGE
    gameOver = createSprite(250, 210, 20, 20); 
    gameOver.addImage("over", gameOverI);
    gameOver.scale = 2;
   
//CREATING SCORE
    score = 0;
   
//CREATING GROUPS FOR ENEMY AND FRUITS
    enemyGroup = createGroup();
    fruitGroup = createGroup();
}    
     
     
 function draw(){
 
//GAME STATE WHILE PLAYING
  if(gameState === PLAY){
    
//THE IMAGE OF GAME OVER TEXT SHOULD NOT APPEAR WHEN THE GAME STATE IS PLAY
    gameOver.visible = false;
    
//MOVING THE KNIFE AS THE MOUSE MOVES
    knife.x = World.mouseX;
    knife.y = World.mouseY;
  
//GIVING COMMAND FOR INCREASING THE SCORE WHEN THE KNIFE CUTS THE FRUITS AND ALSO PLAYING THE SOUND FOR THAT
  if(fruitGroup.isTouching(knife)){
    knifecut.play();
    fruitGroup.destroyEach();
    score = score + 3;
}
    
//ENDING THE GAME WHEN THE KNIFE TOUCHES THE ENEMY AND ALSO GIVE THE SOUND WHEN THE GAME IS OVER
  if(enemyGroup.isTouching(knife)){
    Gameover.play();
    gameState = END;
}
} 
   
//GAME STATE WHEN THE GAME ENDS
   else if(gameState === END){
    
//THE GAME OVER IMAGE SHOULD APPEAR AND KNIFE SHOULD DISAPPEAR IN END STATE
    gameOver.visible = true;
    knife.visible = false;

//THE GROUPS SHOULD NOT MOVE IN END STATE
    enemyGroup.setVelocityYEach(0);
    fruitGroup.setVelocityYEach(0);

//THE GROUPS SHOULD BE DESTROYED IN END STATE
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();    
}   

//CALLING THE FUNCTIONS
//FRUITS
    fruits();
  
//ENEMY
    enemy();
   
//COMMAND FOR DRAWING SPRITES
    drawSprites();

//PROPERTIES FOR SHOWING THE TEXT FOR SCORE
    fill("white");
    stroke("white");
    textSize(20);
    text("Score: "+ score, 350, 50);
}   
    
 
//FUNCTION FOR FRUITS
 function fruits(){
  if(World.frameCount % 80 === 0){
    
//CREATING FRUITS
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    
    r = Math.round(random(1, 4));
 
//COMMAND FOR THE COMPUTER TO CHOOSE THE FRUITS
  if(r === 1){
    fruit.addImage(fruit1);
} else if(r === 2){
    fruit.addImage(fruit2);
} else if(r === 3){
    fruit.addImage(fruit3);
} else{
    fruit.addImage(fruit4);
}
    
    fruit.x = Math.round(random(340, 50));
     
    fruit.velocityY = -7;
    fruit.setLifetime = 100;
    
//ADDING FRUIT SPRITE IN FRUIT GROUP
    fruitGroup.add(fruit);
}    
}    
     
   
//FUNCTION FOR ENEMY
 function enemy(){
  if(World.frameCount % 200 === 0){
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monstera);
    monster.y = Math.round(random(100, 300));
    monster.velocityY = -8;
    monster.setLifetime = 50;
    
    enemyGroup.add(monster);
}
}
