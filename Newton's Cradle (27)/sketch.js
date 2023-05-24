var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 750);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, 100, 1000, 40);

	bob3 = new Bob(600, height/2 + 200, 85);
	bob4 = new Bob(775, height/2 + 200, 85);
	bob2 = new Bob(425, height/2 + 200, 85);
	bob5 = new Bob(950, height/2 + 200, 85);
	bob1 = new Bob(250, height/2 + 200, 85);

	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 175, 0);
	rope2 = new Rope(bob2.body, roof.body, -175, 0);
	rope5 = new Rope(bob5.body, roof.body, 350, 0);
	rope1 = new Rope(bob1.body, roof.body, -350, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);
  
  roof.display();

  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function keyPressed() { 
   if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-50,y:-45});
}
}


