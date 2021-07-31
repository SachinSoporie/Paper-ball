const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var push_button, up, right_button;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
   
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options = {
    restitution: 1, 
    frictionAir: 0.01, 
    density: 0.7, 
    friction: 0.5    
  }

  ball = Bodies.circle(200, 200, 10, ball_options);
  World.add(world, ball);

  push_button = createImg("push.png");
  push_button.position(20, 70);
  push_button.size(15, 15);
  push_button.mouseClicked(pForce);

  right_button = createImg("right.png");
  right_button.position(150, 80);
  right_button.size(15, 15);
  right_button.mouseClicked(rForce);

  up = createImg("up.png");
  up.position(50, 100);
  up.size(15, 150);
  up.mouseClicked(uForce);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
 
  ellipse(ball.position.x, ball.position.y, 50, 50);

  //Hi

}

function pForce(){
  Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0, y : -1});
}

function rForce(){
  Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 1, y : 0});
}

function uForce(){
  Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0, y : 1});
}