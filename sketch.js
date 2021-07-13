
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left,right;

function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	fill(255);
	ball=Bodies.circle(250,550,30);
    World.add(world,ball);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	groundObj =new Ground(450,890,900,20);
	right = new Ground(800,840,20,80);
	left = new Ground(620,840,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  

  left.show();
  groundObj.show();
  right.show();

  keyPressed();
  drawSprites();

  Engine.update(engine)
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.002,y:0})
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.012})
	}
}


