function setup() {
  createCanvas(400, 400);
  noStroke()
  
}

function draw() {
  background(220);
  let x=mouseX
  let y=mouseY
  // push();
  // fill(126, 172, 181);
  // rect(10,10,380,380,40);
  // fill("black")
  // rect(60,100,100,20,5);
  // rect(240,100,100,20,5);
  // rect(160,240,80,100,10);
  // pop();
  // push();
  // fill(250, 223, 161);
  // rect(180,180,40,40,5)
  // fill("black")
  // rect(188,190,4,4,2)
  // rect(208,190,4,4,2)
  // rect(198,208,4,6,2)
  // pop();
  let fill1=x*0.8
  let fill2=y*0.8
  let fill3=160+x*0.2-y*0.3
  fill(126+fill1,72+fill2,fill3)
  let recta=x*0.625+20;
  let rectb=y*0.625+20;
  let rectx=(400-x*0.625)/2-10;
  let recty=(400-y*0.625)/2-10;
  let arc=x*0.025+y*0.025
  rect(rectx, recty, recta, rectb,arc)
  push()
  let eye1x=0.12*recta+3.2+rectx
  let eyey=0.24*rectb+0.4+recty
  let eyea=0.28*recta-5.3
  let eyeb=0.04*rectb+3.1
  let eye2x=400-eye1x-eyea
  fill("black")
  rect(eye1x, eyey, eyea, eyeb,arc*0.4)
  rect(eye2x,eyey,eyea,eyeb,arc*0.4)
  let mouthx=0.22*rectx+157.8
  let mouthy=0.19*recty+168
  let moutha=0.21*recta-0.22
  let mouthb=0.26*rectb+0.78
  rect(mouthx,mouthy,moutha,mouthb,arc*0.4)
  pop()
}