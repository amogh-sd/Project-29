class Shooter{
    constructor(x, y, options){
        var options = {
            x: x,
            y: y,
            stiffness: 0.04,
            length: 10
      }
        this.shooter = Bodies.circle(x,y,options);
    
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }

    fly(){
        this.shooter.x = null;
    }

    display(){
        if(this.shooter.x){
            var pointA = this.shooter.x.position;
            //var pointB = this.pointB;
            
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           push();
         
           stroke(48,22,8);
           if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x - 20,pointA.y,pointB.x - 10,pointB.y);        
            line(pointA.x - 20,pointA.y,pointB.x + 30,pointB.y - 3);
            ellipse(this.shooter,pointA.x - 30,pointA.y - 10,15,30);
           }else{
            strokeWeight(3);
            line(pointA.x + 25,pointA.y,pointB.x - 10,pointB.y);        
            line(pointA.x + 25,pointA.y,pointB.x + 30,pointB.y - 3);
            ellipse(this.shooter,pointA.x + 25,pointA.y - 10,15,30); 
           }
          
        pop();
        }
    }
    
}