   var Engine = Matter.Engine,
     World = Matter.World,
     Events = Matter.Events,
     Bodies = Matter.Bodies;
 
//CREATING ARRAYS
   var particles = [];
   var plinkos = [];
   var divisions = [];

//CREATING THE HEIGHT OF THE DIVISIONS
   var divisionHeight = 300;

//SETTING THE SCORE AS 0
   var score = 0;


 function setup(){

//CREATING THE CANVAS
     createCanvas(800, 800);

//CREATING THE ENGINE AND THE WORLD
     engine = Engine.create();
     world = engine.world;

//CREATING A GROUND
     ground = new Ground(width/2,height,width,20);

//CREATING DIVISIONS
  for (var k = 5; k <= 80; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 80; k <= 160; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 160; k <= 240; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 240; k <= 320; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 320; k <= 400; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 400; k <= 480; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 480; k <= 560; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 560; k <= 640; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for (var k = 640; k <= 800; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


//CREATING PLINKOS
  for (var j = 75; j <= width; j = j + 50){ 
     plinkos.push(new Plinko(j, 75));
}

  for (var j = 50; j <= width - 10; j = j + 50){
     plinkos.push(new Plinko(j, 175));
}

  for (var j = 75; j <= width; j = j + 50){
     plinkos.push(new Plinko(j, 275));
}

  for (var j = 50; j <= width - 10; j = j + 50){
     plinkos.push(new Plinko(j, 375));
}    
}
 

 function draw() {

//SETTING THE BACKGROUND AS BLACK
     background("black");

//TEXT SIZE = 20
     textSize(20);
 
//UPDATING THE ENGINE
     Engine.update(engine);

//DISPLAYING THE GROUND
     ground.display();
  
//DISPLAYING THE PLINKOS 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();   
}
   
//DISPLAYING THE DIVISIONS
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
}

//DROPPING THE PARTICLES
   if(frameCount % 90 === 0){
     particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
}

//DISPLAYING THE PARTICLES 
  for (var p = 0; p < particles.length; p++){
     particles[p].display();
}
}