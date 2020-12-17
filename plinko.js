class plinkos
{
    constructor(x,y)
    {
        var op=
        {
            isStatic:true,
        }
        this.x=x;
        this.y=y
        this.r=10
        this.body=Bodies.circle(x,y,10,op);
        World.add(world,this.body)
    }
    display()
    {
      ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.r,this.r);
    }
}