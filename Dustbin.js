class Dustbin {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic : true});
        World.add(world, this.body);
        this.width = w;
        this.height = h;
    }
    display(){
        var pos = this.body.position;
        fill("orange");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}