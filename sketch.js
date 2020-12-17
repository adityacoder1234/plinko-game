


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform;
var ball4;

var engine, world

var pillars;

var division1 = [];
var plinkos1 = [];
var particle1 = [];

var divisionheight=300;


function setup() {
  createCanvas(800,800)
 

  engine = Engine.create();
  world = engine.world;

  
   for(var a = 75; a<=width; a = a + 50)
   {
     plinkos1.push(new plinkos(a,75))
   }

   for(var a = 50; a<=width; a = a + 75)
   {
     plinkos1.push(new plinkos(a,175));
   }
   for(var a = 60; a<=width; a = a + 50)
   {
     plinkos1.push(new plinkos(a,275));
   }
   for(var a = 50; a<=width; a = a + 75)
   {
     plinkos1.push(new plinkos(a,375));
   }

   if(frameCount%10=== 0)
   {
     particle1.push(new particles1(random(width/2-10, width/2+10,), 10, 10) );
   }



  for(var k = 0; k<=width ;k = k + 80)
  {
    division1.push(new walls(k, height-divisionheight/2, 10, divisionheight));
  }



  platform=new grounds(width/2,height,width,20);
}

function draw() {
  
  background(0);  

  Engine.update(engine);


 for(var k = 0; k < division1.length; k++)
 {
   division1[k].display();
 }
 for(var a = 0; a < plinkos1.length; a++)
 {
   plinkos1[a].display();
 }

for(var j = 0;j < particle1.length; j++)
{
  particle1[j].display();
}



 


 platform.display();
  drawSprites();
  



}