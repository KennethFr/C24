class Log{
    constructor(x,y,h,angle){
var boptions={
    restitution:0.5,
    density:0.05,
}        
this.w=20
this.h=h
this.body=Bodies.rectangle(x,y,20,h,boptions)
Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("blue");
        stroke("red");
        strokeWeight(3)
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}