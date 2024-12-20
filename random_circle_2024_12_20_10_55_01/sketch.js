let xPos
let yPos
let circle=[]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i=0;i<circle.length;i++){
    circle[i].show()
    circle[i].move()
  }
}
function mousePressed(){
  xPos=mouseX
  yPos=mouseY
  circle.push(new Circle())
}

class Circle {
    constructor(){
    this.x = xPos;
    this.y = yPos;
    this.diam = 30;
    this.speedX = random(-2.8, 2.8);
    this.speedY = random(-2.5, 2.5);
  }
  
  show(){
    ellipse(this.x, this.y, this.diam);
  }
  
  move(){
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.y > height - this.diam/2 || this.y < this.diam/2 ){
      this.speedY *= -1;
    }
    
    if (this.x > width - this.diam/2 || this.x < this.diam/2 ){
      this.speedX *= -1;
    }
    
  }
  
}