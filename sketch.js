
const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

var myEngine,myWorld,ground;
var ball,box1;

function setup() {
  createCanvas(600,600);

  myEngine = ENGINE.create(); 
  myWorld = myEngine.world;

 

  /*var ballOptions = {
    restitution: 1
  }

  ball = BODIES.circle(200,200,10, ballOptions);
  WORLD.add(myWorld, ball);*/


  box1 = new Box(200,300,50,50);
  box2 = new Box(230,100,50,80);

  ground = new Ground(300,590,600,10);
  
}

function draw() {
  background(0);  
  ENGINE.update(myEngine);
  rectMode(CENTER);


  //ellipse(ball.position.x, ball.position.y, 20,20);

  box1.display();
  box2.display();
  ground.display();
}