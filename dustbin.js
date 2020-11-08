class Dustbin{
    constructor (x,y,width,height)
    {
        var Dustbin_options = {
            isStatic:true,
            
        }
        
        this.body=Bodies.rectangle(x,y,width,height,Dustbin_options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var Dustbinpos=this.body.position;
        rectMode(CENTER)
        fill("white");
        rect(Dustbinpos.x,Dustbinpos.y,this.width,this.height);
      
    }
}