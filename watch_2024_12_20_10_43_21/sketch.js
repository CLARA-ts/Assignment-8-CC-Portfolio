function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke("grey")
  fill("pink")
  arc(200, 50, 50,50, PI, 2*PI)
  rect(175,50,50,300)
  arc(200,350,50,50,0,PI)
  circle(200,170,100)
  fill("white")
  circle(200,170,90)
  circle(200,260,10)
  circle(200,280,10)
  circle(200,300,10)
  circle(200,320,10)
  circle(200,340,10)
  push()
  fill("pink")
  rect(200,130,3,37)
  rect(199,145,5,22)
  pop()
}