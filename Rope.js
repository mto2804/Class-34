class Rope{
constructor(bodyA,pointB){
var options = {
bodyA: bodyA,
pointB: pointB,
length: 400,
stiffness: 1
}
this.pointB = pointB;
this.rope = Constraint.create(options)
World.add(world,this.rope);
}
display(){
var pointA = this.rope.bodyA.position;
var pointB = this.pointB;
push();
strokeWeight(3);
stroke("blue")
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
}
}