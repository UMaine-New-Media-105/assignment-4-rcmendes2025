function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
  tilesPerRow = 3;
  star1 = {
    startX: 100,
    startY: 250,
    scale: 0.50,
    points: 5,
    startAngle: 20,
    fill: "white",
  };
  star2 = {
    startX: 100,
    startY: 150,
    scale: 1,
    points: 6,
    startAngle: 250,
    fill: "white",
  };
}

function draw() {
  background("navy");
  for (let columnsDrawn = 0; columnsDrawn < 3; columnsDrawn++) {
    star1.x = star1.startX + 100 * columnsDrawn;
    star2.x = star2.startX + 100 * columnsDrawn;
    addStar(star1);
    addStar(star2);
  }
  for (let dotsDrawn = 0; dotsDrawn < 150; dotsDrawn++) {
    var x = random(width);
    var y = random(height);
    noStroke();
    fill("yellow");
    ellipse(x, y, 5);
  }
}

function addStar(star) {
  push();
  translate(star.x, star.startY);
  scale(star.scale);
  rotate(star.startAngle);
  fill(star.fill);
  noStroke();
  let addAngle = 360 / star.points;
  for (let pointsDrawn = 0; pointsDrawn < star.points; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}
