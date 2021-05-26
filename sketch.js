const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engines,worlds;
var box1,box2,ground;

function setup() {
createCanvas(400,400);

engines=Engine.create();
worlds=engines.world;

box1 = new BOX(230,100,60,80);
box2 = new BOX(200,200,40,50);

grounds=new GROUND(400,20);

}

function draw() {
  background("lightgreen");

 Engine.update(engines);

 box1.display();
 box2.display();
 
 grounds.display();
}