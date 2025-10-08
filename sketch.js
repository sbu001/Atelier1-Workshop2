let cat;

function preload()
{
	cat = loadImage("cat.gif");
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
    showDebug();
    enableGyroTap();
    lockGestures();
    angleMode(DEGREES);
    debug("Orientation Basic - Minimal Version");
    debug("Tilt your device to see orientation values");
    debug("Waiting for sensor data...");
}

function draw() 
{
    // background(0, 0, 0, 25);
	// image(cat, rx, ry, rx, 200, 240);

    if(window.sensorsEnabled){
        let rx = rotationX;
        let ry = rotationY;
        let rz = rotationZ;
        debug("--- Device Orientation ---");
        debug("Rotation X (Tilt Forward/Back): " + int(rx) + "°");
        debug("Rotation Y (Tilt Left/Right): " + int(ry) + "°");
        debug("Rotation Z (Turn/Compass): " + int(rz) + "°");

        //image(cat, rx, ry, rx, 200, 240);
    } else{
        debug("Sensors not enabled");
        debug("Tap the screen to enable sensors");
    }
}