let hours=0
let minutes=0
let seconds=0
let millis=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  millis+=deltaTime
  // print(millis)
  if(millis>=1000){
    seconds++
    millis=0
  }
  if (seconds>=60){
    minutes++
    seconds=0
  }
  if (minutes>=60){
    hours++
    minutes==0
  }
  push()
  noFill()
  rect(40,55,320,20)
  rect(40,145,320,20)
  rect(40,235,320,20)
  rect(40,325,320,20)
  pop()
  
  push()
  text(millis,40,100)
  text(seconds,40,190)
  text(minutes,40,280)
  text(hours,40,370)
  pop()
  
  push()
  fill("black")
  let mil=map(millis,0,1000,0,320)
  let sec=map(seconds,0,60,0,320)
  let minute=map(minutes,0,60,0,320)
  let h=(hours,0,24,0,320) 
  rect(40,55,mil,20)
  rect(40,145,sec,20)
  rect(40,235,minute,20)
  if (hours>0){
  rect(40,325,h,20)
  }
  pop()
}