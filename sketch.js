
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(240, 219, 79)

	engine = Engine.create();
	world = engine.world;





	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	dustbin1 = createSprite(1200,645,280,30);
	dustbin1.shapeColor="white";

	paper = new Paper();
	dustbin2 = createSprite(1325,580,30,100);
	dustbin2.shapeColor="white";

	dustbin3 = createSprite(1075,580,30,100);
	dustbin3.shapeColor="white";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		
	}
}
