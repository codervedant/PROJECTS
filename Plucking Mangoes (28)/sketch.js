   var tree, ground;
   var boy, boyI;
   var stone;
   var mango1, mango2, mango3;
   var mango4, mango5, mango6;
   var mango7, mango8, mango9;
   var mango10;
   var sling;

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

 function preload(){
	 boyI = loadImage("/boy.png");
}

 function setup() {
	 createCanvas(1100, 550);
    
	 engine = Engine.create();
	 world = engine.world;

	 boy = createSprite(200, 460, 10, 10);
	 boy.addImage(boyI);
	 boy.scale = 0.15;

	 tree = new Tree(1000, 100, 20, 20);

	 ground = new Ground(width/2, height - 5, 1400, 10);

	 stone = new Stone(121, 375, 10, 10);

	 mango1 = new Mango(800, 225, 10, 10);
	 mango2 = new Mango(710, 210, 10, 10);
	 mango3 = new Mango(620, 175, 10, 10);
	 mango4 = new Mango(785, 130, 10, 10);
	 mango5 = new Mango(860, 170, 10, 10);
	 mango6 = new Mango(920, 240, 10, 10);
	 mango7 = new Mango(1010, 210, 10, 10);
	 mango8 = new Mango(945, 150, 10, 10);
	 mango9 = new Mango(860, 70, 10, 10);
	 mango10 = new Mango(725, 70, 10, 10);
	
	 sling = new Throw(stone.body, {x: 120, y: 373});

	 //Engine.run(engine);
  
}


function draw() {
  	 rectMode(CENTER);
  	 background("skyblue");
  
 	 Engine.update(engine);

	 tree.display();
	 
	 ground.display();
	  
	 stone.display();

	 mango1.display();
	 mango2.display();
	 mango3.display(); 
	 mango4.display();
	 mango5.display();
	 mango6.display();
	 mango7.display();
	 mango8.display();
	 mango9.display();
	 mango10.display();

	 sling.display();

	 detectCollision(stone, mango1);
	 detectCollision(stone, mango2);
	 detectCollision(stone, mango3);
	 detectCollision(stone, mango4);
	 detectCollision(stone, mango5);
	 detectCollision(stone, mango6);
	 detectCollision(stone, mango7);
	 detectCollision(stone, mango8);
	 detectCollision(stone, mango9);
	 detectCollision(stone, mango10);

	 drawSprites();

	 textSize(20);
	 text("Press SPACE for other chance.", 50, 75);
}


 function mouseDragged(){
	 Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
} 


 function mouseReleased(){
	 sling.fly();
}


 function detectCollision(stone, mango){
   var MBD = mango.body.position;
   var SBD = stone.body.position;

   var distance = dist(SBD.x, SBD.y, MBD.x, MBD.y);

    if(distance <= mango.r + stone.r){
	 Matter.Body.setStatic(mango.body, false);
}
}


 function keyPressed(){
	if(keyCode === 32){
	 Matter.Body.setPosition(stone.body, {x: 120, y: 373});
	 sling.attach(stone.body);
}
}




