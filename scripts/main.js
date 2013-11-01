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


/* Checks if mouse is down */
var startDraw = function() {

	isMouseMoving = true;

}

/* Function to allow user to draw */
var draw = function(e) {

	if(isMouseMoving)
	{
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
		context.fill();
	}
	
}

/* Checks if mouse is up */
var endDraw = function() {

	isMouseMoving = false;

}


/* Canvas Event Listeners */
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", endDraw);

