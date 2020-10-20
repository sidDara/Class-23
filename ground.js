class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        
          this.Body= BODIES.rectangle(x,y,width,height,options);
          WORLD.add(myWorld,this.Body);
          this.width = width
          this.height = height
            
    }

    display(){
        var pos = this.Body.position;
        rectMode(CENTER);
        fill (255)
        rect(pos.x, pos.y, this.width, this.height);
    }
}

    