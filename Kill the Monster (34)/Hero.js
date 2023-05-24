class Hero {
	constructor(x, y, r){
   var options = { 
     'density': 1, 
     'frictionAir': 1
};
   	 this.x = x;
     this.y = y;
     this.r = r;
     this.image = loadImage("images/Superhero-01.png");
     this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
     World.add(world, this.body);
}


 display(){
			   
   var heroPos = this.body.position;		
     push();
     translate(heroPos.x, heroPos.y - 50);
     rectMode(CENTER);
     imageMode(CENTER);
     image(this.image, 0, 0, this.r + 150, this.r);
     pop();			
}
}