let cat;
let orientationX = 0;
let orientationY = 0;
let orientationZ = 0;


function preload()
{
	cat = loadImage("cat.gif");
}

function setup() 
{
	createCanvas(windowWidth, window);
    //showDebug();
    enableGyroTap('ENABLE MOTION SENSORS', 'Requesting motion sensors...');
    lockGestures();
    angleMode(DEGREES);

    textAlign(CENTER, CENTER);
    textSize();
}

function draw() 
{
    background(240, 240, 240, 20);

    if(window.sensorsEnabled){

        background(0, 0, 0, 10);
        orientationX = rotationX;
        orientationY = rotationY;
        orientationZ = rotationZ;

        let catX = map(orientationY, -90, 90, 0, width);
        let catY = map(orientationX, -90, 90, 0, height);
        imageMode(CENTER);
        push();
        translate(catX, catY);
        rotate(orientationZ);
        image(cat, 0, 0, 300, 300);
        pop();

        textSize(14);
        fill(100, 100, 100);
        text("Tilt your device to move the GIF!", width/2, height - 30);

    } else{
        fill(50, 50, 50);
        textAlign(CENTER, CENTER);
        textSize(28);
        fill(150, 50, 50);
        text("Motion Sensors Disabled", width/2, height/2 - 40);
        
        textSize(20);
        fill(100, 100, 100);
        text("Tap the screen to enable\nmotion sensors", width/2, height/2 + 20);
    }
}

function touchStarted() 
{
    // Permission handling is done by enableGyroTap
    return false;
}

function touchEnded() 
{
    return false;
}