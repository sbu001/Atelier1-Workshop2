let cat;
let x;
let y;
let speedX = 0;    
let speedY = 0;
let damping = 0.98; // Slow down movement over time
let restitution = 1; // Bounce energy retained on collision (0..1)
let accelerationX = 0;
let accelerationY = 0;
let accelerationZ = 0;
let deviceMoved;
let colours = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

function preload() {
  cat = loadImage("cat.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    enableGyroTap();
    // deviceMoved();
    textAlign(CENTER, CENTER);
    textSize(16);
}

function draw() {
  background(10, 40);
  image(cat, x, y, 80, 95);
  let m = minute();
  let h = hour();
  let timeString = nf(h, 2) + ':' + nf(m, 2);
  let d = day();
  let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthName = monthNames[month() - 1];
  let now = new Date();
  let dayOfWeek = dayNames[now.getDay()];
  let dateString = dayOfWeek + ', ' + monthName + ' ' + d;
  //clock
  push();
  fill(255);
  textSize(70);
  textStyle(BOLD);
  text(timeString, width/2, height/2 - 200);
  pop();
  //date
  push();
  fill(255);
  textSize(20);
  text(dateString, width/2, height/2 - 150);
  pop();

  if (window.sensorsEnabled){
    fill(255);
    textSize(13);
    text("Move your device to move the cat", width/2, height - 30);
  
    // Add acceleration to speed (inverted X so it feels natural)
    speedX += accelerationX * -0.3;
    speedY += accelerationY * 0.3;

    // Update position
    x += speedX;
    y += speedY;

    speedX *= damping;
    speedY *= damping;

    //bouncing off edges
    if (x <= 0) {
      x = 0;
      speedX = -speedX * restitution;
      push();
      strokeWeight(1.2);
      stroke(random(colours));
      noFill();
      ellipse( x + 50, y + 50, random(10, 50), random(10, 50));
      pop();

    } else if (x >= width - 100) {
      x = width - 100;
      speedX = -speedX * restitution;
      push();
      strokeWeight(1.2);
      stroke(random(colours));
      noFill();
      ellipse(x + 50, y + 50, random(10, 50), random(10, 50));
      pop();
    }
    if (y <= height/2 - 150) {
      y = height/2 - 150;
      speedY = -speedY * restitution;
    } else if (y >= height - 120) {
      y = height - 120;
      speedY = -speedY * restitution;
    }

    // Prevent tiny jitter by zeroing very small speeds
    if (Math.abs(speedX) < 0.01) speedX = 0;
    if (Math.abs(speedY) < 0.01) speedY = 0;
  } else {
    fill(255, 100, 100);
    text("Tap the screen to enable motion sensors", width/2, height - 30);
  }
function deviceMoved() {
    accelerationX = accelerationX * 0.8 + accelerationX * 0.3;
    accelerationY = accelerationY * 0.8 + accelerationY * 0.3;
}
if (typeof DeviceMotionEvent !== 'undefined') {
  window.addEventListener('devicemotion', function (event) {
    if (event.accelerationIncludingGravity) {
      accelerationX = event.accelerationIncludingGravity.x || 0;
      accelerationY = event.accelerationIncludingGravity.y || 0;
      accelerationZ = event.accelerationIncludingGravity.z || 0;
    }
  });
}

// push();
// strokeWeight(1.2);
// stroke(random(colours));
// noFill();
// ellipse(width/2, height/2, random(10, 50), random(10, 50));
// pop();

}
function touchStarted(){
    return false;
}
function touchEnded(){
    return false;
}
