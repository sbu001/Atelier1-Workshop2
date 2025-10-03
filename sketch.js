let cat;

function preload()
{
	cat = loadImage("cat.gif");
}

function setup() 
{
	createCanvas(1000, 1500);
}

function draw()
{
background(20, 200, 20);
image(cat, width/2, height/2, 100, 120);

fill(255);
ellipse(100, 100, 100, 100);
}
