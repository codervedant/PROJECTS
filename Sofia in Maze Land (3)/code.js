var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//CREATING SPRITES
var Sofia = createSprite(20,15,15,15);
var wall1 = createSprite(50,40,150,20);
var wall2 = createSprite(170,50,20,170);
var wall3 = createSprite(100,90,120,20);
var wall4 = createSprite(130,145,180,20);
var wall5 = createSprite(50,195,250,20);
var wall6 = createSprite(230,175,20,250);
var wall7 = createSprite(130,245,180,20);
var wall8 = createSprite(140,295,200,20);
var wall9 = createSprite(80,345,230,20);
var wall10 = createSprite(280,170,20,390);
var wall11 = createSprite(330,225,20,380);
var wall12 = createSprite(390,80,30,20);
var wall13 = createSprite(355,45,30,20);
var wall14 = createSprite(390,160,30,20);
var wall15 = createSprite(390,200,30,20);
var wall16 =createSprite(355,240,30,20);
var wall17 = createSprite(390,280,30,20);
var wall18 =createSprite(355,120,30,20);
var cup = createSprite(370,314,40,20);

function draw() {

//SETTING BACKGROUND
background("black");  

//GIVING COLOR TO THE SPRITES
Sofia.shapeColor = "white"; 
wall1.shapeColor = "lightgrey";
wall2.shapeColor = "yellow";
wall3.shapeColor = "green";  
wall4.shapeColor = "violet";
wall5.shapeColor = "orange";
wall6.shapeColor = "red";
wall7.shapeColor = "darkgreen";
wall8.shapeColor = "brown";
wall9.shapeColor = "magenta";
wall10.shapeColor = "pink";
wall11.shapeColor = "brown";
wall12.shapeColor = "purple";
wall13.shapeColor = "magenta";
wall14.shapeColor = "red";
wall15.shapeColor = "lightgreen";
wall16.shapeColor = "lightblue";
wall17.shapeColor = "darkblue";
wall18.shapeColor = "lightgrey";
cup.shapeColor = "yellow";

//MAKING THE TROPHY
fill("yellow");
noStroke();
ellipse(370,330,40);   
rect(366,340,10,40); 

//CREATING EDGES
createEdgeSprites();

//COLLIDING SOFIA TO THE OBJECTS
Sofia.collide(edges);
Sofia.collide(wall1);
Sofia.collide(wall2);
Sofia.collide(wall3);
Sofia.collide(wall4);
Sofia.collide(wall5);
Sofia.collide(wall6);
Sofia.collide(wall7);
Sofia.collide(wall8);
Sofia.collide(wall9);
Sofia.collide(wall10);
Sofia.collide(wall11);
Sofia.collide(wall12);
Sofia.collide(wall13);
Sofia.collide(wall14);
Sofia.collide(wall15);
Sofia.collide(wall16);
Sofia.collide(wall17);
Sofia.collide(wall18);

 //USING THE KEYS TO MOVE
 if (keyDown("space")) {
    Sofia.velocityX = 2;
    Sofia.velocityY = 0;
   }

if (keyDown(DOWN_ARROW)) {
  Sofia.velocityx = 0;
  Sofia.velocityY = 2;
}

if (keyDown(UP_ARROW)) {
 Sofia.velocityX = 0;
 Sofia.velocityY = -2;
}

if (keyDown(LEFT_ARROW)) {
  Sofia.velocityX = -2;
  Sofia.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)) {
  Sofia.velocityX = 2;
  Sofia.velocityY = 0;
}

drawSprites();
  
//WRITIN TEXT ON THE TROPHY
 fill("black");
 text("Trophy",351,330);
 textSize(13);
 
if (Sofia.isTouching(cup)) {
   fill("white");
  textSize(25);
   text("YOU WIN",150,200);
   
}
   

  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
