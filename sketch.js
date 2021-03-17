const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;''
var box,ground;
var Box1;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world=engine.world; 

Ground1=new Ground(400,380,800,20);
Box1=new Box(500,350,70,70);
Box2=new Box(700,350,70,70);
Pig1=new Pig(600,350);
Log1=new Log(600,315,280,PI/2);
Box3=new Box(500,300,70,70);
Box4=new Box(700,300,70,70);
Pig2=new Pig(600,300);
Log2=new Log(600,270,280,PI/2);
Box5= new Box(600,250,70,70);
Log3=new Log(650,250,100,-PI/7);
Log4=new Log(550,250,100,PI/7);
Bird1=new Bird(100,100);
}

function draw() {
  background(0);
  Engine.update(engine);  
Box1.display();
Box2.display();
Ground1.display();
Pig1.display();
Log1.display();
Box3.display();
Box4.display();
Pig2.display();
Log2.display();
Log3.display()
Log4.display();
Bird1.display();
Box5.display();
}