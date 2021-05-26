class GROUND{
  constructor(w,h){
   var stayground={
       isStatic:true
   } 
    this.ground=Bodies.rectangle(200,390,w,h,stayground);
    World.add(worlds,this.ground);
    this.w=w;
    this.h=h;
  }
  display(){
    fill("blue");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
  }
}