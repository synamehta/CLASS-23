class BOX{
    constructor(x,y,w,h){
        var options={
            restitution:0.7
        } 
        this.box = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(worlds,this.box);
    }
    display(){
        push();
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle);
        fill("purple");
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }  
}