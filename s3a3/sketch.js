let bgC;
let strokeC;
let petalLen;
let phiMode = true;

function setup() {
  let canvas = createCanvas(0.9*windowWidth, windowHeight);
  canvas.parent('sketch-container');
  angleMode(RADIANS);
  strokeC = color(random(255), random(255), random(255));
  bgC = color(random(255), random(255), random(255));
  petalLen = min(width, height) / 10;
  myFont = loadFont('Rubik-Regular.ttf');

  strokeWeight(5);
}

function draw() {
  background(bgC);
  stroke(strokeC);
  
  let roundness = map(mouseX, 0, width, 0, height/3);
  let numPetals = map(mouseY, 0, width, 1, 20);
  push()
  noStroke();
  if (red(bgC) < 50 || green(bgC) < 50 || blue(bgC) < 50) {
    fill(255);
  } else {
    fill(0);
  }
  textFont(myFont);
  text("Number of Petals: " + round(numPetals, 5), 10, height/19);
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

function mousePressed() {
  if(mouseX < width) {
    bgC = color(random(255), random(255), random(255));
    strokeC = color(random(255), random(255), random(255));
  }
}

function toggleMode() {
  phiMode = !phiMode;
}

