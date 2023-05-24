var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["11b245fe-266f-45c1-a43b-fd09d12cb70c","c72eebdf-005b-47ab-a726-1292f54ded3c","5d3662c0-7a5e-48d1-83a3-811dc0b221cb"],"propsByKey":{"11b245fe-266f-45c1-a43b-fd09d12cb70c":{"name":"pieceYellow_multi10_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"tSO53bYrD0m3I5hkLEBGl69e8aJsD0ux","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/11b245fe-266f-45c1-a43b-fd09d12cb70c.png"},"c72eebdf-005b-47ab-a726-1292f54ded3c":{"name":"pieceYellow_multi10_1_copy_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"KTN4LNz5zytT266rB7XTEuN3jXnzx83S","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/c72eebdf-005b-47ab-a726-1292f54ded3c.png"},"5d3662c0-7a5e-48d1-83a3-811dc0b221cb":{"name":"pieceBlack_multi10_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"xrrQj9IblfefaIcFlxf5yfjEz_Dq4Ky.","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/5d3662c0-7a5e-48d1-83a3-811dc0b221cb.png"}}};
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

//CREATING LINES AS SPRITES
  var borderlineright = createSprite(380, 0, 3, 800);
  var borderlineleft = createSprite(20, 0, 3, 800);
  var borderlinetop = createSprite(0, 20, 800, 3);
  var borderlinebottom = createSprite(0, 380, 800, 3);

//CREATING STRIKES AS SPRITES
  var playerstrike = createSprite(200, 330, 75, 20);
  var computerstrike = createSprite(200, 70, 75, 20);

//CREATING PUCK (BALL) AS A SPRITE
  var puck = createSprite(200, 200, 20, 20);

//CREATING GOALPOSTS AS SPRITES
  var playerpost = createSprite(200, 395, 125, 35);
  var computerpost = createSprite(200, 5, 125, 35);

  var gamestate = "serve";

//CREATING SCOREBOARD
  var computerscore = 0;
  var playerscore = 0;

//SETTING ANIMATION FOR THE PLAYERSTRIKE, COMPUTERSTRIKE AND THE PUCK
  puck.setAnimation("pieceBlack_multi10_1");
  puck.scale = 0.5; 
  playerstrike.setAnimation("pieceYellow_multi10_1");
  computerstrike.setAnimation("pieceYellow_multi10_1");

  function draw() {

//SETTING BACKGROUND
  background("green");

if(puck.isTouching(computerstrike) || puck.isTouching(playerstrike)){
playSound();
}

//COLORING THE SPRITES
//BORDER LINES
  borderlinetop.shapeColor = "white";
  borderlinebottom.shapeColor = "white";
  borderlineright.shapeColor = "white";
  borderlineleft.shapeColor = "white";

//GOALPOSTS
  playerpost.shapeColor = "yellow";
  computerpost.shapeColor = "yellow";

  fill("green");
  stroke("white");
  strokeWeight(3);
  ellipse(200, 200, 100);
  
//SHOWING THE SCOREBOARD, REFERENCE NOTE FOR SERVING
  if(gamestate === "serve"){
  fill("white");
  strokeWeight(1);
  textSize(25);
  text("Press space to serve", 110, 125);
  textSize(20);
  text(playerscore, 5, 225);
  text(computerscore, 5, 185);
}

//CREATING THE CENTER LINE
  for (var i = 0; i < 400; i = i + 20) {
  fill("white");
  stroke("white");
  strokeWeight(3);
  line(i, 200, i + 10, 200);  
}


//CREATING EDGES 
  createEdgeSprites();

//BOUNCING THE PUCK OFF THE SPRITES AND EDGES
  puck.bounceOff(computerstrike);
  puck.bounceOff(playerstrike);
  puck.bounceOff(edges);

//BOUNCING THE COMPUTER STRIKE AND THE PLAYER STRIKE OFF THE EDGES  
  computerstrike.bounceOff(edges);
  playerstrike.bounceOff(edges);

//SERVING THE PUCK USING SPACE KEY IN THE PRESENCE OF GAMESTATE
  if(keyDown("space") && gamestate === "serve"){
  serve();
  gamestate = "play";
}

//INCREASING THE SCORE WHEN THE PUCK COLLIDES THE GOALPOSTS  
  if(puck.isTouching(computerpost) || puck.isTouching(playerpost)){
  if(puck.isTouching(computerpost)){
  playerscore = playerscore + 1;
}
  
  if(puck.isTouching(playerpost)){
  computerscore = computerscore + 1;
}
  reset();
  gamestate = "serve";
}

//GIVING COMMAND TO END THE GAME 
  if(computerscore === 10 || playerscore === 10){
  gamestate = "reset";
  strokeWeight(1);
  textSize(20);
  text("GAME OVER", 125, 125);
  text("Press R to reset", 200, 275);
}

//GIVING COMMAND TO RESTART THE GAME
  if(keyDown("r") && gamestate === "reset"){
  gamestate = "serve";
  computerscore = 0;
  playerscore = 0;
}

//MOVING THE PLAYER STRIKE TO RIGHT USING RIGHT ARROW KEY
//TO MOVE THE PLAYERSTRIKE TO RIGHT
  if(keyDown(RIGHT_ARROW)){
  playerstrike.x = playerstrike.x + 7;
}

//TO MOVE THE PLAYER STRIKE TO LEFT USING THE LEFT ARROW KEY
  if(keyDown(LEFT_ARROW)){
  playerstrike.x = playerstrike.x - 7;
}

  if(keyDown("a")){
  computerstrike.x = computerstrike.x - 7;
}

  if(keyDown("d")){
  computerstrike.x = computerstrike.x + 7;
}

  

//GIVING COMMAND TO DRAW SPRITES
  drawSprites();
}


//GIVING FUNCTION FOR SERVING
  function serve(){
  puck.velocityX = 4;
  puck.velocityY = 5;
}


//GIVING FUNCTION TO RESET
  function reset(){
  puck.y = 200;
  puck.x = 200;
  puck.velocityX = 0;
  puck.velocityY = 0;
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
