
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1,log1,log2,log3;


function draw(){
    background("purple");
    
    
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper1 = new paper(50,300);
    
    ground = new Ground(400,height,800,60);
    
    log1 = new Dustbin(610,660,250,20);
    log2 = new Dustbin(745,620,20,100);
    log3 = new Dustbin(475,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    
  log1.display();
  log2.display();
  log3.display();
  paper1.display();
  ground.display();
		 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-85})
  }
}



