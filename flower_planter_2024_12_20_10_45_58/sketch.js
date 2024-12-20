function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  flowerPlanter(200,200,255,0,0)
  flowerPlanter(100,100,100,100,255)
  flowerPlanter(300,300,255,100,255) 
}
function flowerPlanter(x,y,a,b,c){
        stroke(0, 128, 0);
    strokeWeight(10);
    line(x, y, x, y+100);
    push()
    noStroke()
    fill(a,b,c)
    translate(x, y)
    ellipse(0, -50, 50, 50);
    ellipse(0, 50, 50, 50);
    ellipse(-50, 0, 50, 50);
    ellipse(50, 0, 50, 50);

    rotate(PI / 4)
    ellipse(0, -50, 50, 50);
    ellipse(0, 50, 50, 50);
    ellipse(-50, 0, 50, 50);
    ellipse(50, 0, 50, 50);
    pop()
    push()
    fill("yellow")
    stroke("green")
    strokeWeight(10)
    circle(x,y,50)
    pop()
  }