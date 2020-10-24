class Box{
    constructor(x,y,width,height){
        var option={
         restitution:0.9,
         friction:0.1,
         density:0.04            
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        fill("white");
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}