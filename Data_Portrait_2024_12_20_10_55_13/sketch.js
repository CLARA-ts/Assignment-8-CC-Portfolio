let theta=0


function setup() {
  createCanvas(400, 400);
}
  let timeArray =[
    [12,17],
    [11,13],
    [13,17],
    [15,16],
    [14]
  ]
function draw() {
  background(220);
  // circleCreate(200,200)
  for (let i=0;i<timeArray.length;i++){
    let h=map(i,0,5,40,360)
    for (let j=0;j<timeArray[i].length;j++){
      let w=map(timeArray[i][j],0,24,40,360)
      circleCreate(w,h)
    }
  }
}
  

function circleCreate(a,b){
    circle(a,b,5)
  let radius=10
  const x = radius * cos(theta)
  const y = radius * sin(theta)
  circle(x+a, y+b, 10)
  theta += 0.04
  }


