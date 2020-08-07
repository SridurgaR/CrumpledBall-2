// Engine param is like a laws of physics - gravity
const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, dustbinImage;
var paper;
var middleLine, rightLine, leftLine;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,200,35);
	middleLine = new Dustbin(525,635,250,20);
	rightLine = new Dustbin(410,555,20,180)
	leftLine = new Dustbin(660,555,20,180);
	ground = new Ground(50,650,1600,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("gray");
  ground.display();
  paper.display();
  imageMode(CENTER);
  image(dustbinImage,525,555,250,180);
  //middleLine.display();
  //rightLine.display();
  //leftLine.display();
  keyPressed();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
        
		Body.applyForce(paper.body, paper.body.position,{x:4.5, y:-9.8});
		
	}
}


