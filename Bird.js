class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("images/bird.png");

    
    this.trajectory = [];

    this.transparency = 255;

    this.smoke = loadImage("images/smoke.png");
  }

  display() {
    super.display();


    if(this.body.velocity.x > 3
     && this.body.position.x > 200){
      this.trajectory.push([this.body.position.x, this.body.position.y]);
    }

    
    for(var smoke = 0; this.trajectory.length-1 > smoke; smoke++){
      push();
       tint(255, this.transparency-=0.1);
       if(this.transparency > 0){
         image(this.smoke, this.trajectory[smoke][0], this.trajectory[smoke][1]);
       }
      pop();
    }
  }
}
