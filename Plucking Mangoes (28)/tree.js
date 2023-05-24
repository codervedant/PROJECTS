//MAKING THE CLASS FOR THE TREE
class Tree {
  constructor(x, y, width, height){
   var options = {
     'isStatic': true
}
     this.image = loadImage("tree.png");
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;

     World.add(world, this.body);
}


 display(){
     push();

   var pos = this.body.position;

     imageMode(CENTER);
     rectMode(CENTER);
     image(this.image, 800, 285, 500, 560);

     pop();      
}
}