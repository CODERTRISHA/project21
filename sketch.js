var ball

var options
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	groundObj=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);

	Engine.run(engine);
 
	ball=Bodies.circle(200,200,20,options)
	World.add(world,ball)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x,ball.position.y,20)
	groundObj.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}

