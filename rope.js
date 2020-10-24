class Rope{
    constructor(bodyA,pointB){
   var options = {
       bodyA:bodyA,
       pointB:pointB,
       stiffnes:1.2,
       length:250,
   }
   this.pointB = pointB;
   this.rope = Constraint.create(options);
   World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = bodyA;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
     if(this.rope.bodyA){
         var pointA = this.rope.bodyA.position;
         var pointB = this.pointB;
         push();
         stroke(42,28,8);
         strokeWeight(3);
         line(pointB.x,pointB.y,pointA.x,pointA.y);
         pop();
     }
    }
}