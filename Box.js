class Box{

    constructor(x,y,width,height){
        var options = {
            restitution: 0.8
        }
        this.Body = BODIES.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        WORLD.add(myWorld,this.Body);
        console.log(this.Body);
    }

    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push ();
        translate(pos.x, pos.y)
        rotate (angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ()
    }

}

