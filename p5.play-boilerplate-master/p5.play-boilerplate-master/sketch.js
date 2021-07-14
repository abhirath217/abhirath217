//creating consts
const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies

var engine,world
var object
var ground

//creating a function setup
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var ground_options={
  isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
    var object_options={
    isStatic:false,
    restitution:1.0
    }
    
    
    object=Bodies.circle(200,100,20,object_options)
    World.add(world,object);
}


//creating a function draw
function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,20,20);



}