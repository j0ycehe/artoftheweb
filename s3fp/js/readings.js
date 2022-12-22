let numReadings = 12;
let spring = 0.03;
let balls = [];
let lock = false;

let x = 1;
let y = 1;
let w = 20;
let h = 20;
let easing = 0.05;

let myFont;

function preload() {
  myFont = loadFont('../assets/Inconsolata_Expanded-Black.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  textSize(width / 10);
  textAlign(CENTER, CENTER);
  for (let i = 1; i < 13; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      30,
      i    
    );
  }
  noStroke();
  
}

function draw() {
    background(237, 34, 93);

    // CURSOR ANIMATION
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    let c = color(237, 34, 93);
    fill(c); 

    ellipseMode(CENTER);
    push()
    stroke(0);
    ellipse(x, y, w, h);
    pop();

    // BOUNCING NUMBERS
    fill(255, 200);
    for (let i = 1; i < 13; i++) {
        document.getElementById("r" + i).style.zIndex= "0";
    }
    
    balls.forEach(ball => {
        ball.move();
        ball.display();
        if (mouseX < ball.x + ball.diameter/2 && mouseX > ball.x - ball.diameter/2 && mouseY < ball.y + ball.diameter/2 && mouseY > ball.y - ball.diameter/2) {
            document.getElementById("r" + ball.id).style.zIndex= "2";
            ball.x = mouseX;
            ball.y = mouseY;
        } 
    });
  
}

class Ball {
  constructor(xin, yin, din, idin) {
    this.x = xin;
    this.y = yin;
    this.vy = random(-0.5, 0.5);
    this.vx = random(-0.5, 0.5);
    this.diameter = din;
    this.id = idin;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= -1;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= -1;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= -1;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= -1;
    }
  }

  display() {
    text(this.id, this.x, this.y)
  }
}
