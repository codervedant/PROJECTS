//CLASS FOR THE BOXES
class Box {
  constructor(x, y, width, height){
   var options = {
     'restitution': 0,
     'friction': 1,
     'density': 0.1
}
     this.visiblity = 255;
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, this.width, this.height, options);
     World.add(world, this.body);
}


 display(){
   if(this.body.speed < 5){
     push();
     translate(this.body.position.x, this.body.position.y);
     fill("orange");
     rectMode(CENTER);
     rect(0, 0, this.width, this.height);
     pop(); 
} else{
     World.remove(world, this.body);
     push();
     this.visiblity = this.visiblity - 2.5;
     tint(255, this.visiblity);
     pop();
}   
}


 score(){
   if(this.visiblity < 0 && this.visiblity > -105){
     score++;
}
}
}