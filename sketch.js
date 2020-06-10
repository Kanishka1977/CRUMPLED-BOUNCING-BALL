const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper,ground,dustbin1,dustbin2,dustbin3;

function setup() {
  var canvas=createCanvas(800, 700);
  
  engine = Engine.create();
  world = engine.world;
  
  keyPressed();

	ground=new Ground(600,400,1200,20);
  paper= new Paper(100,50,20);

  dustbin1=new Ground(700,320,20,150);
  dustbin2=new Ground(520,320,20,150);
  dustbin3=new Ground(600,390,180,20);
  
  Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	   
	 }
   }
   
   

