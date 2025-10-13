let cat;
let x;
let y;
let speedX = 0;    
let speedY = 0;
let damping = 0.98; // Slow down movement over time
let accelerationX = 0;
let accelerationY = 0;
let accelerationZ = 0;
let deviceMoved;

function preload() {
  cat = loadImage("cat.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    enableGyroTap();
    //deviceMoved();
    textAlign(CENTER, CENTER);
    textSize(16);
}

function draw() {
  background(10);
  image(cat, x, y, 100, 120);

  if (window.sensorsEnabled) {
    fill(255);
    text("Cat moving wtih device acceleration", width/2, 40);
    text("X: " + nf(accelerationX, 1, 2) + " m/s²", width/2, height/6 + 40);
    text("Y: " + nf(accelerationY, 1, 2) + " m/s²", width/2, height/6 + 70);
    text("Z: " + nf(accelerationZ, 1, 2) + " m/s²", width/2, height/6 + 100);
    text("Move your device to move the cat", width/2, height - 60);
    text("Shake, tilt, or move the device in different directions", width/2, height - 30);
        
    // Add acceleration to speed (inverted X so it feels natural)
    speedX += accelerationX * -0.01;
    speedY += accelerationY * 0.01;

    // Update position
    x += speedX;
    y += speedY;

    // Damping to make movement smoother
    speedX *= damping;
    speedY *= damping;

    // Keep the GIF inside the canvas boundaries
    x = constrain(x, 0, width - 100);
    y = constrain(y, 0, height - 120);
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
}
function touchStarted(){
    return false;
}
function touchEnded(){
    return false;
}
