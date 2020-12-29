var ground1
var rod,rod1,rod2,rod3,rod4
var pink1,pink2,pink3,pink4,pink5,pink6
var pink7 ,pink8,pink9,pink10,pin11,pink12
var pink13,pink14,pink15,pink16,pink17,pink18
var part1
const Engine = Matter.Engine;       
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300


  


function setup() {
  createCanvas(600,700);



  engine= Engine.create();
  world = engine.world;


  for(var j=50;j<=width;j=j+60){
    plinkos.push(new Plinko(j,120,20))
    plinkos.push(new Plinko(j,280,20))
     }
  
  for(var k=60;k<=width;k=k+70){
    plinkos.push(new Plinko(k,200,20))
  }
  for( var h=70;h<=width;h=h+80){
    plinkos.push(new Plinko(h,350,20))
  }
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/4,10,300))
 }

 
  ground1=new Ground(400,680,800,20)
  
  
  Engine.run(engine);

 
	
  
}




function draw() {
  
  background('black');  
  drawSprites();

  if(frameCount%60==0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
    }

ground1.display()


 for(var j=0;j<plinkos.length;j++){
   plinkos[j].display()
 }
 for(var k=0;k<plinkos.length;k++){
  plinkos[k].display()
}
for(var h=0;h<plinkos.length;h++){
  plinkos[h].display()
}
for(var i=0;i<divisions.length;i++){
  divisions[i].display()
}
for(var i=0;i<particles.length;i++){
particles[i].display()
}
}









