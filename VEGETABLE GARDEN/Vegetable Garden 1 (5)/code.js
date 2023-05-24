var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["efff0777-b0bd-4b74-b91a-aa8ca8fe0cee","3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0","7be78c4b-d6f3-41ed-b804-2f3875168c10","9f0b235f-476e-457c-b729-6f316060d90c","52f03296-148d-43d4-a05a-288a16beb53f","a5eef545-c5a2-4405-9597-da02acf00394","06e4b240-d4c9-4c88-a10d-d0d48f46bc58","ed540bc5-a13b-407b-90b2-befad60fc2ee","e660a2fc-2c9a-4bdc-9d9e-21638612bfb2","234212fc-10a4-4fa0-b39b-a5933fd7df5e","9a6c1100-0c54-4010-b7e3-4013230f1af0","3bb356ae-7908-4947-bdfe-bfab2951afb3","2971c69f-d6b7-4128-8555-36086ca7a516","54abf82a-b533-41cd-b6ef-3f4879d5030c"],"propsByKey":{"efff0777-b0bd-4b74-b91a-aa8ca8fe0cee":{"name":"cricket","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png","frameSize":{"x":900,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"De6B7elPVC46MXda3SX4gt96BlRFkqmA","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":451},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png"},"3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0":{"name":"honeybee","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png","frameSize":{"x":820,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"Cz7pGrrtiUZO4bDsmLXYMb4hU0kpJf7O","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":900},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png"},"7be78c4b-d6f3-41ed-b804-2f3875168c10":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"9f0b235f-476e-457c-b729-6f316060d90c":{"name":"kid_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png","frameSize":{"x":237,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png"},"52f03296-148d-43d4-a05a-288a16beb53f":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png"},"a5eef545-c5a2-4405-9597-da02acf00394":{"name":"mouse_gray_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png"},"06e4b240-d4c9-4c88-a10d-d0d48f46bc58":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"ed540bc5-a13b-407b-90b2-befad60fc2ee":{"name":"82515 (1).png_1","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png","frameSize":{"x":391,"y":672},"frameCount":1,"looping":true,"frameDelay":4,"version":"wYIX6kfg6uBaZVYr9zrtrW8Ihe2he67u","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":672},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png"},"e660a2fc-2c9a-4bdc-9d9e-21638612bfb2":{"name":"carrot","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"KmMzdTPYP0FJDTOjX4phwfPEsnFLMmBW","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png"},"234212fc-10a4-4fa0-b39b-a5933fd7df5e":{"name":"tomato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":".KBeRAl6F.zUJuTSgfi68HbXZ_2JEHfV","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png"},"9a6c1100-0c54-4010-b7e3-4013230f1af0":{"name":"pumpkin","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"nB_A0L9Vy1icPKL6T_0.I..MTNbCz7yH","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png"},"3bb356ae-7908-4947-bdfe-bfab2951afb3":{"name":"potato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"jMBt6WIF2dbyrrK6AnUGVYs_eAyLHiQh","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png"},"2971c69f-d6b7-4128-8555-36086ca7a516":{"name":"watermelon","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"iWB.HY03MdEs_8lOJxToAHQ67z5FFOXh","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png"},"54abf82a-b533-41cd-b6ef-3f4879d5030c":{"name":"mushroom","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"7..T5nyuMM1iRONu1QMYdiYP7IeRy7ZW","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png"}}};
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

  //CREATING ROW FOR PUMPKIN
  for (var i = 50; i < 400; i = i+50) {
  var pumpkin = createSprite(i, 50, 20, 20);
  pumpkin.shapeColor = "orange";
}

  //CREATING A ROW FOR CAPSICUM
  for (var c = 50; c < 400; c = c+50) {
  var capsicum =  createSprite(c, 100, 20, 20);  
  capsicum.shapeColor = "green";
}

  //CREATING A ROW FOR BRINJAL
  for (var b = 50; b < 400; b = b+50) {
  var brinjal = createSprite(b, 150, 20, 20);
  brinjal.shapeColor = "violet";
}

  //CREATING A ROW FOR TOMATOES
  for (var t = 50; t < 400; t = t+50) {
  var tomatoes = createSprite(t, 200, 20, 20);
  tomatoes.shapeColor = "red";
}

  //CREATING A ROW FOR SPINACH
  for (var s = 50; s < 400; s = s+50) {
  var spinach = createSprite(s, 250, 20, 20);
  spinach.shapeColor = "lightgreen";
}

  //CREATING A ROW FOR LEMON
  for (var l = 50; l < 400; l = l+50) {
  var lemon =  createSprite(l, 300, 20, 20);
  lemon.shapeColor = "yellow";
}

  //CREATING A ROW FOR RADISH
  for (var r = 50; r < 400; r = r+50) {
  var radish = createSprite(r, 350, 20, 20);
  radish.shapeColor = "white";
}
    

  function draw() {
  
  //GIVING BACKGROUND
  background(rgb(190, 100, 0));
  
  //GIVING COMMAND FOR DRAWING SPRITES
  drawSprites();
 
  //GIVING NAMES TO THE VEGETABLES AND FRUITS
  
  //PUMPKIN
  fill("orange");
  textSize(25);  
  text("P", 20, 59); 
  text("U", 65, 59);  
  text("M", 115, 59);
  text("P", 167, 59);
  text("K", 218, 59);
  text("I", 270, 59); 
  text("N", 318, 59); 
  text("S", 368, 59);
  
  //CAPSICUM
  fill("green");
  text("C", 18, 109);
  text("A", 68, 109);
  text("P", 118, 109);
  text("S", 168, 109);
  text("I", 218, 109);
  text("C", 268, 109);
  text("U", 318, 109);
  text("M", 368, 109);
  
  //BRINJAL
  fill("violet");
  text("B", 18, 159);
  text("R", 68, 159);
  text("I", 118, 159);
  text("N", 168, 159);
  text("J", 218, 159);
  text("A", 268, 159);
  text("L", 318, 159);
  text("S", 368, 159);
  
  //TOMATOES
  fill("red");
  text("T", 18, 209);
  text("O", 68, 209);
  text("M", 115, 209);
  text("A", 168, 209);
  text("T", 218, 209);
  text("O", 265, 209);
  text("E", 318, 209);
  text("S", 368, 209);
  
  //SPINACH
  fill("lightgreen");
  text("S", 18, 259);
  text("P", 68, 259);
  text("I", 120, 259);
  text("N", 166, 259);
  text("A", 218, 259);
  text("C", 268, 259);
  text("H", 318, 259);
  
  //LEMON
  fill("yellow");
  text("L", 18, 309);
  text("E", 68, 309);
  text("M", 116, 309);
  text("O", 166, 309);
  text("N", 216, 309);
  text("S", 266, 309);
  
  //RADISH
  fill("white");
  text("R", 18, 359);
  text("A", 68, 359);
  text("D", 118, 359);
  text("I", 168, 359);
  text("S", 218, 359);
  text("H", 268, 359);
  text("E", 318, 359);
  text("S", 368, 359);
  
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
