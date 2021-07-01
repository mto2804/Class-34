const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground;
var ball;
var rope1;
function setup(){
    var canvas = createCanvas(900,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,800,1200,20)
    box1 = new Box(600,200,70,70);
    box2 = new Box(600,200,70,70);
    box3 = new Box(600,200,70,70);
    box4 = new Box(600,200,70,70);
    box5 = new Box(600,200,70,70);
    box6 = new Box(600,200,70,70);
    box7 = new Box(600,200,70,70);
    box8 = new Box(600,200,70,70);
    box9 = new Box(600,200,70,70);
    box10 = new Box(600,200,70,70);
    box11 = new Box(500,200,70,70);
    box12 = new Box(500,200,70,70);
    box13 = new Box(500,200,70,70);
    box14 = new Box(500,200,70,70);
    box15 = new Box(500,200,70,70);
    box16 = new Box(500,200,70,70);
    box17 = new Box(500,200,70,70);
    box18 = new Box(500,200,70,70);
    box19 = new Box(500,200,70,70);
    box20 = new Box(500,200,70,70);
    ball = Bodies.circle(300,500,50);
    World.add(world,ball)
    rope1 = new Rope(this.ball,{x:300,y:100})
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ellipseMode(RADIUS)
    fill("black");
    ellipse(ball.position.x,ball.position.y,50,50);
    rope1.display();
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}