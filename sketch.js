const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine,world;

var bridge;

var wallL,wallR,ground;

var jointPoint,jointLink;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height-10, width*2, 20, "#795548", true);
  wallL = new Base(300, height/2 +50, 400 ,100, "#8d6e63", true);
  wallR = new Base(width-300, height/2 +50 ,400, 100, "#8d6e63", true);

  bridge = new Bridge(15,{x:width/2 -400,y:height/2 +30});
  
  jointPoint = new Base(width-400,height/2+40,40,20,"#8d6e63",true);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint); 

  for(var i = 0; i<= 8; i++){
    var x = random(width/2 -200,width/2 +300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();

  wallL.show();
  wallR.show();

  for(var stone of stones){
    stone.show();
  }
}
