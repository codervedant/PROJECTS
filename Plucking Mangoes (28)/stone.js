class Stone{
    constructor(x, y, r){
        var options = {
           // 'isStatic': true,
            'restitution': 0,
            'friction': 1,
            'density': 1.2
}
    this.r = r;
    this.image = loadImage("stone.png");
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
}


 display(){
  
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image, 0, 0, 35, 35);
    pop();
 }
};