var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a44d125a-bcb9-4890-9bc5-90b204104ce6","89875881-5d06-4ceb-a585-05004c306cd9","2a41f7f4-8c7a-4045-8b67-3e4488365d8b","2760044c-c014-43b4-b972-5de962e0922c","48bc1a31-3038-42ba-9ab9-1ab172afe717","0c635296-d805-4e9c-90b4-e065f594e129"],"propsByKey":{"a44d125a-bcb9-4890-9bc5-90b204104ce6":{"name":"net.png_1","sourceUrl":"assets/v3/animations/8yip__MImxP4Vfei5g6QjOmQNmFHPIYe_wLr9x54Gjg/a44d125a-bcb9-4890-9bc5-90b204104ce6.png","frameSize":{"x":583,"y":36},"frameCount":1,"looping":true,"frameDelay":4,"version":"0SQjkZhA1bicb4Q8hJA6UrJ.P1arehCl","loadedFromSource":true,"saved":true,"sourceSize":{"x":583,"y":36},"rootRelativePath":"assets/v3/animations/8yip__MImxP4Vfei5g6QjOmQNmFHPIYe_wLr9x54Gjg/a44d125a-bcb9-4890-9bc5-90b204104ce6.png"},"89875881-5d06-4ceb-a585-05004c306cd9":{"name":"ball.jpg_1","sourceUrl":null,"frameSize":{"x":728,"y":596},"frameCount":1,"looping":true,"frameDelay":12,"version":"Oc6ue5TeDGF9YH.1UGqJ68onQW3qbPcY","loadedFromSource":true,"saved":true,"sourceSize":{"x":728,"y":596},"rootRelativePath":"assets/89875881-5d06-4ceb-a585-05004c306cd9.png"},"2a41f7f4-8c7a-4045-8b67-3e4488365d8b":{"name":"bat1.png_1","sourceUrl":null,"frameSize":{"x":301,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"xG2B6KKEVnucGlojb6FJiU4JkQBbTfuy","loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":200},"rootRelativePath":"assets/2a41f7f4-8c7a-4045-8b67-3e4488365d8b.png"},"2760044c-c014-43b4-b972-5de962e0922c":{"name":"bat1.png_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"DcocAO8YaggjPIqXAKgosClZkgbWrqg1","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/2760044c-c014-43b4-b972-5de962e0922c.png"},"48bc1a31-3038-42ba-9ab9-1ab172afe717":{"name":"bat1.png_1_copy_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"BW5sTgnPDcNTEA1pV8HbX4WzChiQarnV","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/48bc1a31-3038-42ba-9ab9-1ab172afe717.png"},"0c635296-d805-4e9c-90b4-e065f594e129":{"name":"bat1.png_1_copy_1_copy_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"DTCibWrKthRXvtvfKfg.5WeWNMw_WT2X","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/0c635296-d805-4e9c-90b4-e065f594e129.png"}}};
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

//CREATING MIDLINE
  var midline = createSprite(200, 0, 5, 800);

//CREATING PLAYER 1 AS A SPRITE
  var player1 = createSprite(200, 350, 20, 20);
  player1.setAnimation("bat1.png_1_copy_1_copy_1_copy_1_copy_1");
  player1.scale = 0.5;

//CREATING PLAYER 2 AS A SPRITE  
  var player2 = createSprite(200, 50, 20, 20);
  player2.setAnimation("bat1.png_1_copy_1_copy_1");
  player2.scale = 0.5;

//CREATING NET
  var net = createSprite(200, 200, 10, 10);
  net.setAnimation("net.png_1");

//CREATING BALL
  var ball = createSprite(200, 200, 20, 20);
  ball.setAnimation("ball.jpg_1");
  ball.scale = 0.05;

//CREATING A GAME STATE FOR SERVING 
  var gamestate = "serve";

//CREATING SCORE FOR BOTH THE PLAYERS
  var player1score = 0;
  var player2score = 0;


  function draw() {

//GIVING BACKGROUND
  background("#31aa17");


//GIVING SOUND WHEN BALL IS BEING HIT BY THE PLAYERS
  if(ball.isTouching(player1) || ball.isTouching(player2)){
  playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_2.mp3");
}

//GIVING COLOR TO THE MID LINE
  stroke("white");
  midline.shapeColor = "white";

//GIVING GAME STATE FOR SERVING  
  if(gamestate === "serve"){
  fill("orange");
  strokeWeight(1);
  textSize(30);
  text("Press Space", 15, 125);
  text("to Serve", 215, 125);
  text(player1score, 15, 250);
  text(player2score, 15, 165);
}

//CREATING EDGES
  createEdgeSprites();

//BOUNCING THE BALL OFF THE OBJECTS
//EDGES
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
//PLAYERS  
  ball.bounceOff(player1);
  ball.bounceOff(player2);

//COLLIDING PLAYER 1 TO THE OBJECTS 
//NET
  player1.collide(net);
//EDGES  
  player1.collide(edges);

//COLLIDING PLAYER 1 TO THE OBJECTS 
//NET  
  player2.collide(net);
//EDGES
  player2.collide(edges);

//GIVING COMMAND FOR SERVING USING SPACE KEY
  if(keyDown("space") && gamestate === "serve"){
  serve();
  gamestate = "play";
}

//INCREASING THE SCORE WHEN BALL TOUCHES TOP AND BOTTOM EDGES
  if(ball.isTouching(topEdge) || ball.isTouching(bottomEdge)){
  if(ball.isTouching(topEdge)){
  player1score = player1score + 1;
}
  if(ball.isTouching(bottomEdge)){
  player2score = player2score + 1;
}
  playSound("assets/category_achievements/peaceful_win_8.mp3");
  reset();
  gamestate = "serve";  
}

//ENDING THE GAME BY GIVING MAXIMUM SCORE FOR THE PLAYERS 
//AND ALSO RESETING THE GAME
  if(player1score === 10 || player2score === 1){
  gamestate = "reset";
  fill("orange");
  strokeWeight(1);
  textSize(35);
  textFont("times new roman");
  text("GAME", 50, 150);  
  text("OVER", 250,  150);
  text("Press R", 70, 250);  
  text("to Reset", 230, 250);
}

//RESETING THE GAME USING R KEY  
  if(keyDown("r") && gamestate === "reset"){
  gamestate = "serve";
  player1score = 0;
  player2score = 0;
}

//MOVING PLAYER 1 
//TO RIGHT
  if(keyDown("right")){
  player1.setAnimation("bat1.png_1_copy_1_copy_1_copy_1_copy_1_copy_1");
  player1.x = player1.x + 6;
}

//TO LEFT
  if(keyDown("left")){
  player1.setAnimation("bat1.png_1_copy_1_copy_1_copy_1_copy_1");
  player1.x = player1.x - 6;
}

//MOVING PLAYER 2
//TO LEFT
  if(keyDown("a")){
  player2.setAnimation("bat1.png_1_copy_1_copy_1");
  player2.x = player2.x - 6;
}

//TO RIGHT
  if(keyDown("d")){
  player2.setAnimation("bat1.png_1");
  player2.x = player2.x + 6;
}

//GIVING COMMAND TO DRAW SPRITES
  drawSprites();
}


//FUNCTION FOR SERVING THE BALL
  function serve(){
  ball.velocityX = 4;
  ball.velocityY = 5;
}


//FUNCTION FOR RESETING THE BALL
  function reset(){
  ball.x = 200;
  ball.y = 200;
  ball.velocityY = 0;
  ball.velocityX = 0;
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
