
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var plain;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	hammer = new Hammer(100,200);
	stone = new Stone(500,320,70,70);  
	plain = new Plain(600,height,1200,30);
	rubber = new Rubber(920,320,70);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  hammer.display();
  stone.display();
  plain.display();
  rubber.display();
}



