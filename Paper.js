class Paper {  
    constructor(x, y){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
        World.add(world, this.body);
      
    }
    display(){
        fill("red");
       }
    }
