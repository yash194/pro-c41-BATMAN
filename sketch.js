
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops=[];
var md=100;
var thunderCreatedFrame = 0;
var thunder;
function preload(){
    
t1=loadImage("images/thunderbolt/1.png");
t2=loadImage("images/thunderbolt/2.png");
t3=loadImage("images/thunderbolt/3.png");
t4=loadImage("images/thunderbolt/4.png");

}

function setup(){
    engine=Engine.create();
    world=engine.world;

   createCanvas(400,750);
u=new umbrella(200,450);    


for (var i=0;i<md;i++){
    drops.push(new cdrops(random(0,400),random(0,400)));

}



}

function draw(){
    background("black");
    Engine.update(engine);
u.display();
for(var p=0; p<drops.length; p++){
    drops[p].display();
 }

 //update drops
 for(var q=0; q<drops.length; q++){
    drops[q].updatep();
 }


if(frameCount %80 === 0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(200,80,10,10);
    var rand = Math.round(random(1,4));
    switch(rand){
       case 1: thunder.addImage(t1);
              break;
       case 2: thunder.addImage(t2);
              break;
       case 3: thunder.addImage(t3);
              break;
       case 4: thunder.addImage(t4);
              break;
       default: break;
     }

    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}