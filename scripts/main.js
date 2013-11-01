/* JavaScript Document */


/* Canvas Variables */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

/* Drawing Variables */
var radius = 10;
var isMouseMoving = false;

/* Setting width and height of the canvas */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;


/* Checks if mouse is down */
var startDraw = function(e) {

	isMouseMoving = true;
	draw(e);

}

/* Function to allow user to draw */
var draw = function(e) {

	if(isMouseMoving)
	{
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
	
}

/* Checks if mouse is up */
var endDraw = function() {

	isMouseMoving = false;
	context.beginPath();

}


/* Canvas Event Listeners */
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDraw);

