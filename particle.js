class Particles {
    constructor(x, y,radius) {
    var options = {
        'restitution':0.2
    }
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius=radius
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
  }
  display(){
   // console.log(this.radius)
    var angle = this.body.angle;
    var pos=this.body.position
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius+5,this.radius+5)
    pop();
  }
}











