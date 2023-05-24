var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var rect1, rect2, rect3;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}


function setup(){
	
	createCanvas(800, 700);
	
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	rect1 = createSprite(width/2, 650, 200, 20);
	rect1.shapeColor = color(255, 0, 0);
	
	rect2 = createSprite(300, 610, 20, 100);
	rect2.shapeColor = color(255, 0, 0);

	rect3 = createSprite(490, 610, 20, 100);
	rect3.shapeColor = color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution: 0, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);

  background(0);

  rect(ground.positionX, ground.positionY, 400, 200) ;

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  packageSprite.collide(rect1);

  

  drawSprites();
 
}

function keyPressed(){
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody, false);
  	

    
  }
}



