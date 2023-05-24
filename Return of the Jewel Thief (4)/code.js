var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ddb83ff3-01db-4aaf-ad09-c92c36c60fc7","e2327c34-f805-45cf-8e99-51ad6586ad4e"],"propsByKey":{"ddb83ff3-01db-4aaf-ad09-c92c36c60fc7":{"name":"axe_iron_1","sourceUrl":"assets/api/v1/animation-library/gamelab/UBzdh7oFqnp95v75GXR5yH7I_kSmkewk/category_tools/axe_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"UBzdh7oFqnp95v75GXR5yH7I_kSmkewk","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/UBzdh7oFqnp95v75GXR5yH7I_kSmkewk/category_tools/axe_iron.png"},"e2327c34-f805-45cf-8e99-51ad6586ad4e":{"name":"hammer_iron_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Aq4T.U9npXb90WWuQTla4kF9tGlIj40y/category_tools/hammer_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"Aq4T.U9npXb90WWuQTla4kF9tGlIj40y","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Aq4T.U9npXb90WWuQTla4kF9tGlIj40y/category_tools/hammer_iron.png"}}};
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

  //CREATING NATWARLAL AS A SPRITE
  var thief = createSprite(10, 390, 20, 20);

  //CREATING THE LASERS AS SPRITES
  var laser1 = createSprite(100, 200, 200, 20);
  var laser2 = createSprite(300, 185, 200, 20);

  //CREATING OTHER OBSTACLES
  //CREATING AXE
  var axe = createSprite(230, 70, 100, 20);
  axe.setAnimation("axe_iron_1");
  axe.scale = 0.7;
  axe.rotationSpeed = 10;
  axe.velocityX = 8;
 
  //CREATING ANOTHER AXE
  var axe1 = createSprite(230, 300, 100, 2);
  axe1.setAnimation("axe_iron_1");
  axe1.scale = 0.7;
  axe1.rotationSpeed = 10;
  axe1.velocityX = 10;

  //GIVING VELOCITY TO THE LASERS
  laser1.velocityX = 8;
  laser2.velocityX = 8;


  function draw() {
 
  //SETTING THE BACKGROUND
  background("lightblue");
 
  //COLORING THE SPRITES
  thief.shapeColor = "black";
  laser1.shapeColor = "red";
  laser2.shapeColor = "red";
 
  //CREATING THE DIAMOND 
  fill("blue");
  shape(390, 0, 380, 10, 390, 20, 400, 10);
 
  //GIVING COMMAND TO CREATE EDGES
  //BOUNCING THE SPRITES OFF THE EDGES
  createEdgeSprites();
  axe.bounceOff(edges);
  axe1.bounceOff(edges);
  axe1.bounceOff(laser1);
  axe1.bounceOff(laser2);
  axe.bounceOff(laser1);
  axe.bounceOff(laser2);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
 
  //COLLIDING NATWARLAL TO THE EDGES
  thief.collide(edges);
  
  //GIVING COMMAND TO MOVE NATWARLAL
  if(keyDown(RIGHT_ARROW)){
  thief.x = thief.x + 5;
} 
 
  if(keyDown(LEFT_ARROW)){
  thief.x = thief.x - 5;
} 
 
  if(keyDown(UP_ARROW)){
  thief.y = thief.y - 5;
}
 
  if(keyDown(DOWN_ARROW)){
  thief.y = thief.y + 5;
}

  
  if(thief.isTouching(laser1)){
  textSize(25);
  text("THIEF IS CAUGHT", 100, 125);
  thief.y = 390;
  thief.x = 10;
}
 
  if(thief.isTouching(laser2)){
  textSize(25);
  text("THIEF IS CAUGHT", 100, 125);
  thief.y = 390;
  thief.x = 10;
}

  if(thief.isTouching(axe)){
  textSize(25);
  text("THIEF IS CAUGHT", 100, 125);
  thief.y = 390;
  thief.x = 10;
}  

  if(thief.isTouching(axe1)){
  textSize(25);
  text("THIEF IS CAUGHT", 100, 125);
  thief.y = 390;
  thief.x = 10;
}

  if(thief.y === 0 && thief.x === 390){
  textSize(25);
  text("GAME OVER", 65, 150);
}
  
  //GIVING COMMAND TO SHOW THE SPRITES 
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
