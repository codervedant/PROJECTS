
   var monkey , monkey_running;
   var banana ,bananaImage, obstacle, obstacleImage;
   var FoodGroup, obstacleGroup;
   var score;
   var zoo, zooImage, invisibleGround;
   var survivalTime;


 function preload(){
  
  
     monkey_running =                 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
     bananaImage = loadImage("banana.png");
     obstacleImage = loadImage("obstacle.png");
     zooImage = loadImage("background.png");
}


 function setup() {
  
     createCanvas(600, 600);
  
     zoo = createSprite(0, 0, 200, 20);
     zoo.addImage("moving", zooImage);
     zoo.scale = 7;
     zoo.velocityX = -4;
     zoo.x = zoo.width/2;
     console.log(zoo.x);
   
     monkey = createSprite(80, 400, 20, 20);
     monkey.addAnimation("running", monkey_running);
     monkey.scale = 0.15;
  

     invisibleGround = createSprite(0, 410, 400, 10);
     invisibleGround.visible = false;
   
     FoodGroup = new Group();
     obstacleGroup = new Group();

     survivalTime = 0;
}


 function draw() {
  
     zoo.velocityX = -4;
   
    if(zoo.x < 0){
     zoo.x = zoo.width/2;
}   
    
    if(keyDown("space")){
     monkey.velocityY = -12;
}
   
     monkey.velocityY = monkey.velocityY + 0.9;
   
     monkey.collide(invisibleGround);
     
     
     food();
   
     obstacles();
   
     drawSprites(); 

     fill("darkred");
     stroke("darkred");
     textSize(20);
     survivalTime = Math.ceil(frameCount/frameRate());
     text("Survival Time: " + survivalTime, 100, 50);
}   
    
    
 function food(){
    if(frameCount % 80 === 0){
   var banana = createSprite(600, 200, 20, 20);
     banana.y = Math.round(random(120, 200));
     banana.addImage("food", bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -5;
      
     banana.lifetime = 200;
      
     FoodGroup.add(banana);
}
}


 function obstacles(){
    if(frameCount % 300 === 0){
   var rock = createSprite(600, 365, 20, 20);
     rock.addImage("obstale", obstacleImage);
     rock.scale = 0.25;
     rock.velocityX = -6;
          
     rock.lifetime = 200; 
      
     obstacleGroup.add(rock);
      
}  
}

