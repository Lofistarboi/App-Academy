class Snake {
  constructor(position) {
    this.direction = "N";
    this.segments = [];
    this.position = position;
  }

  move() {
    switch (this.direction) {
      case "N":
        this.position[1] -= 1;
        break;
      case "S":
        this.position[1] += 1;
        break;
      case "E":
        this.position[0] += 1;
        break;
      case "W":
        this.position[0] -= 1;
        break;
    }
  }

  turn(direction) {
    this.direction = direction;
  }

  growSnake(segment) {
    this.segements.push(segment);
  }
  
}

module.exports = Snake;


// How are we going to make the snake grow? 
// When it hits a position on the grid that has an apple, console.log that position first

