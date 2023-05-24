class Drop {
  constructor(x, y){

   var options = {
     'isStatic': false,
     'friction': 0.1
} 
     this.rain = Bodies.circle(x, y, 3, options);
     this.r = 3;
     World.add(world, this.rain);
}


 display(){
   var pos = this.rain.position;
     push();
     translate(pos.x, pos.y);
     fill("blue");
     noStroke();
     ellipseMode(RADIUS);
     ellipse(0, 0, this.r, this.r);  
     pop();
}


 update(){
  if(this.rain.position.y > height){
     Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)});
}
}
};