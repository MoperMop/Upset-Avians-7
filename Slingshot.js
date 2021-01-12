class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        this.sling1 = loadImage("images/sling1.png");
        this.sling2 = loadImage("images/sling2.png");
        this.sling3 = loadImage("images/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 21);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
              stroke("#54270F");
              if(pointA.x < 220){
                  strokeWeight(4);
                  line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
                  line(pointA.x-30, pointA.y, pointB.x+30, pointB.y-3);
                  image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
              }
              else{
                  strokeWeight(3);
                  line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                  line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                  image(this.sling3, pointA.x+25, pointA.y-10, 15, 30);
              }
            pop();
        }
    }
    
    attach(body){
        this.sling.bodyA = body;
    }
}