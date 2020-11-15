class umbrella{

constructor(x,y){

var options ={
    isStatic:true,

}
this.u=Bodies.circle(x,y,50,options);
this.radius=50;
this.image=loadImage("images/Walking Frame/walking_1.png");
World.add(world,this.u);


}
display(){

var pos=this.u.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y+70,300,300);


}

}