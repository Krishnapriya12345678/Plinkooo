class Plinko {
    constructor(x, y,radius) {
    var options = {
        'restitution':0.2,
        'friction':1.2,
        'density':3,
       
       isStatic:true
    }
    this.radius=radius
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }
  display(){
   // console.log(this.radius)
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("white")
    circle(0,0,this.radius*2)
    pop();
  }
}











