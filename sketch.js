var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,log1,log2,log3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	log1 = createSprite(400,650,270,20);
	log1.shapeColor = color("red");

	log2 = createSprite(540,555,20,210);
	log2.shapeColor = color("red");

	log3 = createSprite(275,550,20,180);
	log3.shapeColor = color("red");

	//write packageSprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true,});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   if(packageSprite.isTouching(log1)){
	   packageSprite.collide(log1);
   }  

   log1.depth = packageSprite.depth
   log1.depth =   log1.depth+1; 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
  Matter.Body.setStatic(packageBody,false);
   
  }
}



