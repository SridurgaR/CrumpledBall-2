class Ground{
    constructor(){
        this.body = Bodies.rectangle(50,650,1600,20,{isStatic:true});
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,1600,20);
    }
}