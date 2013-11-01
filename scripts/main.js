/* JavaScript Document */


/* Variables */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 10;

/* Setting width and height of the canvas */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



/* Function to allow user to draw */
var draw = function(e) {

	context.beginPath();
	context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);

}

canvas.addEventListener("mousedown", draw);

