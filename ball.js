class Ball{
    constructor(x,y,width,height,angle){
        var option={
         frictionAir:0.005,
         density:0.04            
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        fill("red");
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}