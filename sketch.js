//let cat;
let touch1X = 0;
let touch1Y = 0; 
let touch2X = 0;  
let touch2Y = 0; 
let touchAngle = 0;
let colours = [100, 150, 200, 250, 300, 359];
let randomIndex = Math.floor(Math.random() * colours.length);

showDebug();

// function preload()
// {
// 	  cat = loadImage("cat.gif");
// }

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	lockGestures();
	textAlign(CENTER, CENTER);
	textSize(24);

	if (touches.length >= 2){
		touch1X = touches[0].x;
        touch1Y = touches[0].y;
        touch2X = touches[1].x;
        touch2Y = touches[1].y;

		let angleInRadians = atan2(touch2Y - touch1Y, touch2X - touch1X);
        touchAngle = degrees(angleInRadians);

		//line
		stroke(100, 100, 100);
        strokeWeight(3);
		strokeStyle = colours[randomIndex];
        line(touch1X, touch1Y, touch2X, touch2Y);

		//circles
		fillStyle = colours[randomIndex];  // Red circles
        noStroke();
        circle(touch1X, touch1Y, 30);
        circle(touch2X, touch2Y, 30);
	}     else 
    {
        // Instructions when not enough touches
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(100, 100, 100);
        text("Touch 2 points on the screen", width/2, height/2);
    }
}

function touchStarted() 
{
    // Touch positions will be updated in draw() function
    return false;
}

// This function runs when a touch ends
function touchEnded() 
{
    // Touch positions will be updated in draw() function
    return false;
}

function draw()
{
background(20, 200, 20);
//image(cat, width/2, height/2, 100, 120);

// fill(255);
// ellipse(100, 100, 100, 100);
}