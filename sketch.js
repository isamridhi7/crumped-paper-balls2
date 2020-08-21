
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,90);
 

	
boxposition = width/2+300;
boxY = 610;

boxleftsprite = createSprite(boxposition,boxY,20,100);
boxleftsprite.shapeColor = "yellow";

boxleftbody = Bodies.rectangle(boxposition+20 ,boxY,20,100,{isStatic:true});
World.add(world,boxleftbody);

boxbase = createSprite(boxposition+100,boxY+40,200,20);
boxbase.shapeColor = "yellow";

boxbottombody = Bodies.rectangle(boxposition+100 ,boxY+45-20,200,20,{isStatic:true});
World.add(world,boxbottombody);


boxleftsprite = createSprite(boxposition+200,boxY,20,100);
boxleftsprite.shapeColor = "yellow";

boxrightbody = Bodies.rectangle(boxposition+200-20 ,boxY,20,100,{isStatic:true});
World.add(world,boxrightbody);

circleSprite = createSprite(100,100);
circleSprite.shapeColor = "blue";
circlebody = Bodies.circle(100,100,40,{isStatic:false},{restitution:0.3},{friction:0.5},{density:1.2},[0])


Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
circleSprite.ellipse(2,2,20);
ground.display();
keypressed();
drawSprites();
 
}

function keypressed(){
	if(KeyCode === UP_ARROW){
	Matter.Body.applyForce(circleSprite.body,circleSprite.body.position,{x:120,y:120})
	}
	}
	

