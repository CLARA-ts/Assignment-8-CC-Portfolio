function setup() {
  createCanvas(400, 400);
   angleMode(DEGREES)
  noStroke()
}

function draw() {
 background(220)
  for (let i=0;i<=20;i++){
    for(let j=0;j<=20;j++){
      if((i+j)%2==0){
        fill("red")
      }else{
        fill("blue")
      }
      rect(i*20,j*20,20)
    }
  }
  for(let x=1;x<=19;x++){
    for (let y=1;y<=19;y++){
      if((x+y)%3==0){
         fill("white")
      }else if((x+y)%3==1){
        fill("yellow")
      }else{
        fill("green")
      }
      circle(x*20,y*20,10)
    }
  }
}