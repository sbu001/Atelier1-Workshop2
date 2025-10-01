let cat;

function preload()
{
	cat = loadImage("cat.gif");
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
background(20, 200, 20);
image(cat, width/2, height/2, 100, 120);
}
