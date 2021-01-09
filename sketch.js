
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(400,600,40);
	bob1 = new Bob(480,600,40)
	bob2 = new Bob(560,600,40)
	bob3 = new Bob(640,600,40)
	bob4 = new Bob(720,600,40)
	roof = new Roof(800, 300, 800,20)
	rope = new Rope(bob.body, roof.body,-40*7.5,0)
	rope2 = new Rope(bob1.body, roof.body,-40*5.5,0)
  rope3 = new Rope(bob2.body, roof.body,-40*3.5,0)
  rope4 = new Rope(bob3.body, roof.body,-40*1.5,0)
  rope5 = new Rope(bob4.body, roof.body,-40*0,0)
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  text(mouseX+","+mouseY, mouseX, mouseY) 
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob.body, bob.body.position, {x: 50, y: 45})
}

}

