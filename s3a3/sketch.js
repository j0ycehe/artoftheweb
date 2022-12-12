let bgC;
let strokeC;
let petalLen;
let phiMode = true;

function setup() {
  createCanvas(windowWidth - 100, windowHeight);
  angleMode(RADIANS);
  strokeC = color(random(255), random(255), random(255));
  bgC = color(random(255), random(255), random(255));
  petalLen = width/5;

  strokeWeight(5);
}

function draw() {
  background(bgC);
  stroke(strokeC);
  
  let roundness = map(mouseX, 0, width, 0, width/3);
  let numPetals = map(mouseY, 0, width, 1, 20);
  push()
  noStroke();
  if (red(bgC) < 50 || green(bgC) < 50 || blue(bgC) < 50) {
    fill(255);
  } else {
    fill(0);
  }
  text("Number of Petals: " + numPetals, 10, width/19);
  pop()
  
  translate(width/2, height/2);
  
  if (phiMode) {
    mode1(numPetals, roundness);
  } else {
    mode2(numPetals, roundness);
  }

}

function mode1(np, ro) {
  beginShape(POINTS);
  for(let phi = 0; phi < 2*PI; phi += PI/180) {
    let r = (petalLen * sin(phi * np)) + ro;
    let x = r * cos(phi);
    let y = r * sin(phi);
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mode2(np, ro) {
  beginShape(POINTS);
  for(let phi = 0; phi < 360; phi += 1) {
    let r = (petalLen * sin(phi * np)) + ro;
    let x = r * cos(phi);
    let y = r * sin(phi);
    vertex(x,y);
  }
  endShape(CLOSE);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    petalLen += 1;
  } else if (keyCode === DOWN_ARROW && petalLen >= 1) {
    petalLen -= 1;
  }
}

function mousePressed() {
  bgC = color(random(255), random(255), random(255));
}

function toggleMode() {
  phiMode = !phiMode;
}

