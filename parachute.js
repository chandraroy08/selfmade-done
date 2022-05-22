class Parachute {
    constructor(x, y, width, height, paraPos) {
    
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
  
      this.image = loadImage("parachuteimg.png");
      this.paraPosition = paraPos;
      World.add(world, this.body);
    }

    remove(index) {
      setTimeout(() => {
        Matter.World.remove(world, boats[index].body);
        delete boats[index];
      }, 200);
    }
    
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }