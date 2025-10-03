let touch1X = 0;    
let touch1Y = 0; 
let touch2X = 0;  
let touch2Y = 0; 
let touchAngle = 0;
let cat;
let colours = [100, 150, 200, 250, 300, 350];

function preload()
{
	cat = loadImage("cat.gif");
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	background(120, 20, 20, 50);
    textAlign(CENTER, CENTER);
    textSize(24);
}

function draw() 
{
	image(cat, width/4, height/4, 200, 240);
    
    // Check if we have at least 2 touches
    if (touches.length >= 2) 
    {
        // Get the positions of the first 2 touches
        touch1X = touches[0].x;
        touch1Y = touches[0].y;
        touch2X = touches[1].x;
        touch2Y = touches[1].y;
        
        let angleInRadians = atan2(touch2Y - touch1Y, touch2X - touch1X);
        touchAngle = degrees(angleInRadians);  // Convert to degrees
        
        // Draw a line between the two touches
        //stroke(100, 100, 100);
        strokeWeight(3);
	    let randomColor = colours[Math.floor(Math.random() * colours.length)];
        stroke(randomColor);
        line(touch1X, touch1Y, touch2X, touch2Y);
        
    }
}