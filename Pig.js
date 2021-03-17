class Pig{
    constructor(x,y){
var boptions={
    restitution:0.5,
    density:0.05,
}        
this.w=50
this.h=50
this.body=Bodies.rectangle(x,y,50,50,boptions)
    World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        strokeWeight(3)
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}