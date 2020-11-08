
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper,ground,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Paper = new paper(600,650,40);
	ground=new Ground(600,650,1200,20);
	dustbin1=new Dustbin(550,570,20,100);

	dustbin2=new Dustbin(750,570,20,100);
	dustbin3=new Dustbin(650,630,220,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  background(0);
  rectMode(CENTER);
  Paper.display();
  ground.display();
  dustbin1.display();

  dustbin2.display();
  dustbin3.display();
  drawSprites();
 keyPressed();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
}
}



