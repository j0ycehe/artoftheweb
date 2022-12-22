let x = 1;
let y = 1;
let w = 20;
let h = 20;

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

  stroke(255);
  fill(255, 40); 

  ellipseMode(CENTER);

  ellipse(x, y, w, h);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
