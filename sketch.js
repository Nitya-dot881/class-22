const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ground_options={
       isStatic:true
   }
   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
 
    box_options={
        
        restitution:2
    }
    box=Bodies.rectangle(100,170,50,60,box_options)
    World.add(world,box)

    ball_options={
        
        restitution:2
    }
    ball=Bodies.circle(300,200,30,ball_options)
    World.add(world,ball)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("pink")
    strokeWeight(4)
    stroke("red")
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,50,60)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,30,30)
}
