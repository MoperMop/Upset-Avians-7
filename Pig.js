class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("images/enemy.png");
    
    this.visibility = 255;
    this.alive = true;
  }


  display(){
    if(this.body.speed <= 3){super.display();}
    else{
      World.remove(world, this.body);
      this.alive = false;
    }
    if(this.alive === false
     && this.visibility > 0){
      this.visibility = this.visibility-5;
      push();
       tint(255, this.visibility);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50)
      pop();
    }
  }
};