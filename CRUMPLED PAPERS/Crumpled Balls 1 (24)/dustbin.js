class Dustbin {
    constructor(x, y){

		var options = {
        isStatic: true
}    
    
    this.x = x;
    this.y = y;
    this.binWidth = 200;
    this.binHeight = 100;
    this.wallThickness = 20;
    

    this.bottomSide = Bodies.rectangle(this.x, this.y, this.binWidth, this.wallThickness, options);
    this.leftSide = Bodies.rectangle(this.x - this.binWidth/2, this.y - this.binHeight/2, this.wallThickness, this.binHeight, options);
    this.rightSide = Bodies.rectangle(this.x + this.binWidth/2, this.y - this.binHeight/2, this.wallThickness*2, this.binHeight, options);

	Matter.Body.setAngle(this.leftSide, this.angle)
	Matter.Body.setAngle(this.rightSide, -1*this.angle);

    World.add(world, this.bottomSide);
    World.add(world, this.leftSide);
    World.add(world, this.rightSide);
}

display(){
    var bottompos = this.bottomSide.position;
    var leftpos = this.leftSide.position;
    var rightpos = this.rightSide.position;

    push();
    translate(leftpos.x, leftpos.y);
	rectMode(CENTER);
	angleMode(RADIANS);
	fill(255);
	stroke(255);
	rotate(this.angle);
	rect(0,0,this.wallThickness, this.binHeight);
	pop();

	push();
	translate(rightpos.x, rightpos.y);
	rectMode(CENTER);
	stroke(255);
	angleMode(RADIANS);
	fill(255);
	rotate(-1*this.angle);
	rect(0,0,this.wallThickness, this.binHeight);
    pop();
    
    push();
	translate(bottompos.x, bottompos.y);
	rectMode(CENTER);
	stroke(255);
	angleMode(RADIANS);
	fill(255);
	rect(0,0,this.binWidth, this.wallThickness);
	pop();
}
};