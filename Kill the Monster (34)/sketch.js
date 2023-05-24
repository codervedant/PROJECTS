 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

   var engine, world;
   var box1, box2, box3, box4;
   var hero, monster, rope1, ground, bg;
   var box5, box6, box7, box8;
   var box9, box10, box11, box12;
   var box13, box14, box15, box16;
   var box17, box18, box19, box20;
   var box21, box22, box23, box24;
   var box25, box26, box27, box28;
   var box29, box30, box31, box32;


 function preload() {
     bg = loadImage("images/GamingBackground.png");
}


 function setup() {

     createCanvas(3000, 700);

     engine = Engine.create();
     world = engine.world;

     ground = new Ground(700, 550, 1500, 20);

     hero = new Hero(300, 300, 250);
     rope1 = new Rope(hero.body, {x: 150, y: 150});
     monster = new Monster(1100, 350, 300);

     box1 = new Box(600, 100, 50, 50);
     box2 = new Box(700, 100, 50, 50);
     box3 = new Box(800, 100, 50, 50);
     box4 = new Box(900, 100, 50, 50);

     box5 = new Box(600, 150, 50, 50);
     box6 = new Box(700, 150, 50, 50);
     box7 = new Box(800, 150, 50, 50);
     box8 = new Box(900, 150, 50, 50);

     box9 = new Box(600, 150, 50, 50);
     box10 = new Box(700, 150, 50, 50);
     box11 = new Box(800, 150, 50, 50);
     box12 = new Box(900, 150, 50, 50);

     box13 = new Box(600, 150, 50, 50);
     box14 = new Box(700, 150, 50, 50);
     box15 = new Box(800, 150, 50, 50);
     box16 = new Box(900, 150, 50, 50);

     box17 = new Box(600, 150, 50, 50);
     box18 = new Box(700, 150, 50, 50);
     box19 = new Box(800, 150, 50, 50);
     box20 = new Box(900, 150, 50, 50);

     box21 = new Box(600, 150, 50, 50);
     box22 = new Box(700, 150, 50, 50);
     box23 = new Box(800, 150, 50, 50);
     box24 = new Box(900, 150, 50, 50);

     box25 = new Box(600, 150, 50, 50);
     box26 = new Box(700, 150, 50, 50);
     box27 = new Box(800, 150, 50, 50);
     box28 = new Box(900, 150, 50, 50);

     box29 = new Box(600, 150, 50, 50);
     box30 = new Box(700, 150, 50, 50);
     box31 = new Box(800, 150, 50, 50);
     box32 = new Box(900, 150, 50, 50);
}


 function draw() {

     rectMode(CENTER);

     background(bg);

     Engine.update(engine);

     ground.display();

     box1.display();
     box2.display();
     box3.display();
     box4.display();

     box5.display();
     box6.display();
     box7.display();
     box8.display();

     box9.display();
     box10.display();
     box11.display();
     box12.display();

     box13.display();
     box14.display();
     box15.display();
     box16.display();

     box17.display();
     box18.display();
     box19.display();
     box20.display();

     box21.display();
     box22.display();
     box23.display();
     box24.display();

     box25.display();
     box26.display();
     box27.display();
     box28.display();

     box29.display();
     box30.display();
     box31.display();
     box32.display();


     hero.display();

     rope1.display();

     monster.display();

}


 function mouseDragged(){
     Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}


 function mouseReleased(){
     rope1.fly();
}


 function keyPressed(){
    if(keyCode === 32){
     rope1.attach(hero.body);
}
}


