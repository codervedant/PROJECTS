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

//pinballs
var ball1 = createSprite(200,300,20,20);
var ball2 = createSprite(180,320,20,20);
var ball3 = createSprite(220,320,20,20);
var ball4 = createSprite(160,340,20,20);
var ball5 = createSprite(200,340,20,20);
var ball6 = createSprite(240,340,20,20);

//squariad
var squariad = createSprite(200,100,20,20);

//BORDER
var borderright = createSprite(390,200,20,400);
var borderbottom = createSprite(200,390,400,20);
var borderleft = createSprite(10,200,20,400);
var bordertop = createSprite(200,10,400,20);

//color of the pinballs
ball1.shapeColor = "yellow";
ball2.shapeColor = "red";
ball3.shapeColor = "orange";
ball4.shapeColor = "blue";
ball5.shapeColor = "black";
ball6.shapeColor = "green";

borderbottom.shapeColor = "brown";
bordertop.shapeColor = "brown";
borderleft.shapeColor = "brown";
borderright.shapeColor = "brown";

//squariad
squariad.velocityY = 7.5;
squariad.velocityX = 6;
squariad.shapeColor = "white";


textFont("Brush Script MT");
textSize(40);

function draw() {
  
background("lightgreen");
  
//creating edges
createEdgeSprites();

//bouncing pins and squariad
ball1.bounceOff(edges);
ball2.bounceOff(edges);
ball3.bounceOff(edges);
ball4.bounceOff(edges);
ball5.bounceOff(edges);
ball6.bounceOff(edges);  

squariad.bounceOff(edges);

borderright.bounce(edges);
borderleft.bounce(edges);
bordertop.bounce(edges);
borderbottom.bounce(edges);

ball1.bounce(ball2);
ball1.bounce(ball3);
ball1.bounce(ball4);
ball1.bounce(ball5);
ball1.bounce(ball6);
ball1.bounce(squariad);

ball1.bounceOff(borderleft);  
ball1.bounceOff(borderright);
ball1.bounceOff(bordertop);
ball1.bounceOff(borderbottom);

ball2.bounce(ball3);  
ball2.bounce(ball4);  
ball2.bounce(ball5);
ball2.bounce(ball6);
ball2.bounce(squariad);

ball2.bounceOff(borderleft);
ball2.bounceOff(borderright);
ball2.bounceOff(bordertop);
ball2.bounceOff(borderbottom);

ball3.bounce(ball4);
ball3.bounce(ball5);
ball3.bounce(ball6);
ball3.bounce(squariad);

ball3.bounceOff(borderleft);
ball3.bounceOff(borderright);
ball3.bounceOff(bordertop);
ball3.bounceOff(borderbottom);

ball4.bounce(ball5);
ball4.bounce(ball6);
ball4.bounce(squariad);

ball4.bounceOff(borderleft);
ball4.bounceOff(borderright);
ball4.bounceOff(bordertop);
ball4.bounceOff(borderbottom);

ball5.bounce(ball6);
ball5.bounce(squariad);

ball5.bounceOff(borderleft);
ball5.bounceOff(borderright);
ball5.bounceOff(bordertop);
ball5.bounceOff(borderbottom);
 
ball6.bounce(squariad);

ball6.bounceOff(borderleft);
ball6.bounceOff(borderright);
ball6.bounceOff(bordertop);
ball6.bounceOff(borderbottom);

squariad.collide(ball1);
squariad.collide(ball2);
squariad.collide(ball3);
squariad.collide(ball4);
squariad.collide(ball5);
squariad.collide(ball6);

squariad.bounceOff(bordertop);
squariad.bounceOff(borderleft);
squariad.bounceOff(borderright);
squariad.bounceOff(borderbottom);

fill("darkblue");
text("SQUARIAD",115,100);

       
  drawSprites();

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
