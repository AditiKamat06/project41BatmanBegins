class Drops{
    constructor(x,y){
        var options = {
            friction : 0.01,
            restitution : 0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    display(){
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400) , y:random(0,400)});
        }
    }
}