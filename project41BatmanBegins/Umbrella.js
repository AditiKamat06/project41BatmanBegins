class Umbrella {
    constructor(x,y){
        var options = {
            isStatic : true 
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.image = loadImage('images/Walking Frame/walking_1.png');

        // Matter.Bodies.setStatic(Bodies, true);
    }
 
    display(){
        // ellipseMode(RADIUS);
        // ellipse(this.body.position.x, this.body.position.y, 10, 10);
        image(this.image, this.body.position.x-150, this.body.position.y-100, 300, 300 );
    }
}