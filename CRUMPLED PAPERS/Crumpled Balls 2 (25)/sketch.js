
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperRoll;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

    
	engine = Engine.create();
	world = engine.world;

    rectMode(CENTER);

	ground = new Ground(width/2, 670, width, 15);

	paperRoll = new Paper(200, 600, 40);

	dustbin = new Dustbin(1200, 660);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  ground.display();
  
  dustbin.display();
  paperRoll.display();

  
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperRoll.body, paperRoll.body.position, {x: 85, y: -85});
}
}



