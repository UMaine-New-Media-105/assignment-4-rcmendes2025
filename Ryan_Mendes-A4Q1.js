function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  star1 = {
    starX: 100, 
    starY: 150, 
    scale: 0.50,
    points: 10,
    startAngle: 20,
  }
}

function draw() {
  background("navy");
  addStar(120, 50, 0.50, 5, 1, "white");
  addStar(160, 100, 0.50, 5, 30, "white");
  addStar(55, 133, 1, 5, 36, "white");
  
}

function addStar(starX, starY, starScale, starPoints, starAngle, starFill) {
  fill(starFill);
  noStroke();
  let addAngle = 360 / starPoints
  push();
  translate(starX, starY);
  scale(starScale)
  rotate(starAngle);
  for (let pointsDrawn = 0; pointsDrawn < starPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -30, 0);
  }
  pop();
}
