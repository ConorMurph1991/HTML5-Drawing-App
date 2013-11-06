/* JavaScript Document */


/* Canvas Variables */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

/* Drawing Variables */
var brushSize = 10;
var isMouseMoving = false;

/* Setting width and height of the canvas */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = brushSize * 2;


/* Checks if mouse is down */
function startDraw(e) {
	isMouseMoving = true;
	draw(e);
}

/* Function to allow user to draw */
function draw(e) {

	if(isMouseMoving)
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, brushSize, 0, Math.PI * 2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
	
}

/* Checks if mouse is up */
function endDraw() {
	isMouseMoving = false;
	context.beginPath();
}


/* Canvas Event Listeners */
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDraw);

