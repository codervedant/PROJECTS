var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10;

function setup() {
  createCanvas(700,400);
   
  //apartment1
  a1=new Building();
  a1.position=1;
  a1.floors=18;
  
  //apartment2
  a2=new Building();
  a2.position=2.5;
  a2.floors=12;
 
  //apartment3
  a3=new Building();
  a3.position=4;
  a3.floors=27;
  
  //apartment4
  a4=new Building();
  a4.position=5.5;
  a4.floors=15;
  
  //apartment5
  a5=new Building();
  a5.position=7;
  a5.floors=10;
  
  //apartment6
  a6=new Building();
  a6.position=8.5;
  a6.floors=17;
  
  //apartment7
  a7=new Building();
  a7.position=10;
  a7.floors=13;
  
  //apartment8
  a8=new Building();
  a8.position=11.5
  a8.floors=22;
  
  //apartment9
  a9=new Building();
  a9.position=13.3;
  a9.floors=30;
  
  //apartment10
  a10= new Building();
  stroke("black");
  a10.position=15;
  a10.floors=16;
}

function draw() {
 
  //sky color
  background("skyblue");
 
  //coloring apartments
  fill("red");
  stroke("black");
  a1.display();
 
  fill("blue");
  stroke("black");
  a2.display();
  
  fill("lightgreen");
  stroke("black");
  a3.display();
  
  fill("purple");
  stroke("black");
  a4.display();
  
  fill("white");
  stroke("black");
  a5.display();
 
  fill("yellow");
  stroke("black");
  a6.display();
  
  fill("lightblue");
  stroke("black");
  a7.display();
   
  fill("violet");
  stroke("black");
  a8.display();
 
  fill("green");
  stroke("black");
  a9.display();
  
  fill("lightpink");
  stroke("black");
  a10.display();

  //The Sun
  fill("yellow");
  stroke("gold")
  circle(55,55,100);
  
  fill("purple");
  stroke("black");
  rect(44.2,246,65,5);

  fill("violet");
  stroke("black");
  rect(48.5,240.5,55,5);

  fill("pink");
  stroke("black");
  rect(74,215.5,5,25);
  
  //windows of apartment1
  fill("maroon");
  stroke("black");
  rect(85,255,25,10);
  rect(45,270,25,10);
  rect(85,285,25,10);
  rect(45,300,25,10);
  rect(85,315,15,10);
  rect(45,330,25,10);
  rect(85,345,15,10);
 
  //door of apartment1
  fill("brown");
  stroke("black");
  rect(50,367.5,15,27);
  //door handle
  fill("yellow");
  stroke("black");
  circle(54,381,2.5);

  //windows of apartment2
  fill("yellow");
  stroke("black");
  rect(145,303,10,10);
  rect(135,303,10,10);
  rect(125,303,10,10);
  rect(115,303,10,10);
  rect(105,303,10,10);
  rect(110,320,10,10);
  rect(120,320,10,10);
  rect(130,320,10,10);
  rect(140,320,10,10);
  rect(145,337,10,10);
  rect(135,337,10,10);
  rect(125,337,10,10);
  rect(115,337,10,10);
  rect(105,337,10,10);
  rect(140,354,10,10);
  rect(130,354,10,10);
  rect(120,354,10,10);
  rect(110,354,10,10);
  //door
  rect(125,375,12,20);
  //door handle
  fill("brown");
  stroke("black");
  circle(127.5,385,2.5);

  fill("red");
  stroke("black");
  rect(164.5,169,65,10);
  rect(169,159,55,10);
  rect(174,149,45,10);
  rect(179,139,35,10);
  rect(184,129,25,10);
  fill("magenta");
  stroke("purple");
  circle(196.6,155,33);
  rect(196.5,139,0,33);
  rect(180,155,33,0);
  rect(170,185,20,30);
  rect(205,185,20,30);
  rect(170,225,20,30);
  rect(205,225,20,30);
  rect(170,265,20,30);
  rect(205,265,20,10);
  rect(205,265,15,30);
  rect(170,305,20,30);
  rect(205,305,15,30);
  rect(170,345,20,30);
  rect(205,345,15,30);
  //door of apartment3 is from opposite side
  
  fill("gold");
  stroke("black");
  rect(220,235,10,40);
  rect(285,235,10,40);
  rect(230,245,10,30);
  rect(275,245,10,30);
  rect(240,255,10,20);
  rect(265,255,10,20);
  rect(250,265,15,10);
   
  //windows of apartment4
  fill("yellow");
  stroke("black");
  rect(225,285,65,20);
  rect(225,315,55,20);
  rect(225,345,55,20);
  //door of apartment4 is from opposite side
  
  //windows of apatment5
  fill("lightblue");
  stroke("black");
  rect(290,325,15,15);
  rect(290,340,15,15);
  rect(312.5,340,15,15);
  rect(312.5,325,15,15);
  rect(335,325,5,15);
  rect(335,340,5,15);
  
  //door
  rect(295,370,25,25);
  rect(320,370,20,25);
  //door handle
  fill("grey");
  stroke("black");
  rect(310,380,7.5,2.5);
  rect(322.5,380,7.5,2.5);
  
  fill("darkgreen");
  stroke("black");
  rect(400,194,15,65);
  rect(390,204,15,55);
  rect(380,214,15,45);
  rect(370,224,15,35);
  rect(360,234,15,25);
  rect(350,244,15,15);
  rect(340,254,15,5);

  //windows of apartment6
  fill("green");
  stroke("black");
  rect(350,274,10,30);
  rect(400,274,10,16.5);
  rect(375,274,10,30);
  rect(350,314,10,30);
  rect(375,314,10,30);
  rect(350,354,10,30);
  rect(375,354,10,30);
  //door of apartment6 is from opposite side
  
  //windows of apartment7
  fill("red");
  stroke("black");
  rect(405,300,30,15);
  rect(435,300,25,15);
  rect(405,320,30,15);
  rect(435,320,25,15);
  rect(405,340,30,15);
  rect(435,340,25,15);
  
  //door1 of apartment7
  rect(405,365,20,30);
  //handle of door 1 of apartment7
  fill("darkred");
  stroke("black");
  circle(420,380,5);

  //door2 of apartment7
  fill("red");
  stroke("black");
  rect(445,365,15,30);
  //door handle of door of apartment7
  fill("darkred");
  circle(450,380,5);

  //window of apartment8
  fill("white");
  stroke("black");
  rect(465,230,15,20);
  rect(485,230,15,20);
  rect(505,230,15,20);
  rect(525,230,7.5,20);
  rect(465,250,15,20);
  rect(485,250,15,20);
  rect(505,250,15,20);
  rect(525,250,7.5,20);
  rect(465,270,15,20);
  rect(485,270,15,20);
  rect(505,270,15,20);
  rect(525,270,7.5,20);
  rect(465,290,15,20);
  rect(485,290,15,20);
  rect(505,290,15,20);
  rect(525,290,7.5,20);
  rect(465,310,15,20);
  rect(485,310,15,20);
  rect(505,310,15,20);
  rect(525,310,7.5,20);
  rect(465,330,15,20);
  rect(485,330,15,20);
  rect(505,330,15,20);
  rect(525,330,7.5,20);
  rect(465,350,15,20);
  rect(485,350,15,20);
  rect(505,350,15,20);
  rect(525,350,7.5,20);
  rect(465,370,15,20);
  rect(485,370,15,20);
  rect(505,370,15,20);
  rect(525,370,7.5,20);
  //door of apartment8 is on opposite side

  fill("yellow");
  rect(532,130,10,25);
  rect(597,130,10,25);
  rect(542,120,10,35);
  rect(587,120,10,35);
  rect(552,110,10,45);
  rect(577,110,10,45);
  rect(562,100,15,55);
  
  //top window of apartment9
  stroke("black");
  fill("skyblue");
  circle(569.5,135,33)
  //windows of apartment9
  fill("skyblue");
  stroke("black");
  rect(540,165,30,15);
  rect(570,165,30,15);
  rect(540,185,30,15);
  rect(570,185,30,15);
  rect(540,205,30,15);
  rect(570,205,30,15);
  rect(540,225,30,15);
  rect(570,225,30,15);
  rect(540,245,30,15);
  rect(570,245,30,15);
  rect(540,265,30,15);
  rect(570,265,30,15);
  rect(540,285,30,15);
  rect(570,285,30,15);
  rect(540,305,30,15);
  rect(570,305,30,15);
  rect(540,325,30,15);
  rect(570,325,30,15);

  //door of the apartment9
  fill("lightblue");
  stroke("black");
  rect(540,355,30,40);
  rect(570,355,30,40);
  //door handle 
  fill("silver");
  stroke("black");
  rect(560,367,5,15);
  rect(575,367,5,15);
  
  
  fill("grey");
  stroke("black");
  rect(598,260,80,10);
  
  //windows of apartment10
  fill("darkred");
  stroke("black");
  rect(610,280,10,70);
  rect(625,280,10,70);
  rect(640,280,10,70);
  rect(655,280,10,70);
  rect(610,360,55,10);
  rect(610,375,55,10);
  //the door of the apartment 10 is from opposite side
  
  //cloud1
  fill("white");
  stroke("white");
  circle(90,150,50);
  circle(60,160,50);
  circle(100,170,50);
  ellipse(80,165,100,25);
    
  //cloud2
  fill("white");
  stroke("white");  
  circle(250,40,50);
  circle(210,50,50);
  circle(280,60,50);
  ellipse(235,50,100,50);
  
  //cloud3
  fill("white");
  stroke("white"); 
  circle(320,140,50);
  circle(330,110,50);
  circle(340,130,50);
  circle(360,135,50);
  circle(370,125,50);
  circle(400,105,50);
  circle(410,130,50);
  
  //cloud4
  fill("white");
  stroke("white"); 
  circle(500,40,50);
  circle(510,60,50);
  circle(470,40,50);
  circle(550,55,50);
  ellipse(500,50,100,50);
}

