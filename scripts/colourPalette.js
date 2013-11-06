/* JavaScript Document */


/* Variables */
var swatches = document.getElementsByClassName("swatch");



function setColour(colour) {
	
	context.fillStyle = colour;
	context.strokeStyle = colour;
	
var activeSwatch =  document.getElementsByClassName("active")[0];
	if(activeSwatch)
	{
		activeSwatch.className = "swatch";
	}
}



/* Get the swatch that is selected
   and makes it the active swatch */
function setSwatch(e) {

	var selectedSwatch = e.target;
	

	setColour(selectedSwatch.style.backgroundColor)
	

	selectedSwatch.className += " active ";

}


/* Swatch Event Listeners */
for(var i = 0; i < swatches.length; i++)
{
	swatches[i].addEventListener("click", setSwatch);
}