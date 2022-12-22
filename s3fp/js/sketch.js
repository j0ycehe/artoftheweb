let x = 1;
let y = 1;
let w = 180;
let h = 180;
let expand = false;
let arrow = false;

let easing = 0.05;

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
function draw() {
  background(0);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  let c = color(237, 34, 93);
  fill(c); 

  ellipseMode(CENTER);

  if (expand && w < 230 && h < 230) {
    w += 5;
    h += 5;
  } 
  
  if (!expand && w > 180 && h > 180) {
    w -= 5;
    h -= 5;
  }

  if (arrow) {
    drawArrow();
  } else {
    ellipse(x, y, w, h);
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function expandCircle() {
  expand = true;
}

function shrinkCircle() {
  expand = false;
}

function drawArrow() {
  let s = 50;
  let offsetX = 0;
  let offsetY = 0;
  push();
  strokeWeight(40);
  strokeCap(SQUARE);
  stroke(237, 34, 93);
  line((mouseX - offsetX) - 1.5*s, (mouseY - offsetY) + 1.5*s, (mouseX - offsetX) + s, (mouseY - offsetY) - s);
  strokeCap(PROJECT);
  line((mouseX - offsetX) - s/2, (mouseY - offsetY) - s, (mouseX - offsetX) + s, (mouseY - offsetY) - s);
  line((mouseX - offsetX) + s, (mouseY - offsetY) - s, (mouseX - offsetX) + s, (mouseY - offsetY) + s/2);
  pop();
}
