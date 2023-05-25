class Paper{
  constructor(x, y, r){
   var options = {
     'isStatic': false,
     'restitution': 0.3,
     'friction': 0.5,
     'density': 1.2     
}
     this.image = loadImage("paper.png");
     this.x = x;
     this.y = y;
     this.r = r;    
  
     this.body = Bodies.circle(x, y, this.r/2, options);

     World.add(world, this.body);
}

display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("pink");
      image(this.image, 0, 0, this.r, this.r);
      pop();
}
};


