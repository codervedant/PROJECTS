class Bob{
    constructor(x, y, r){
     var options = {
       'restitution': 0.3,
       'friction': 0.5,
       'density': 1.2     
  }
       this.x = x;
       this.y = y;
       this.r = r;    
    
       this.body = Bodies.circle(x, y, this.r/2, options);
  
       World.add(world, this.body);
  }
  
  display(){
  
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill("violet");
        ellipse(0, 0, this.r);
        pop();
}
};