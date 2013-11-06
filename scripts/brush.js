/* JavaScript Document */


/* Brush Variables */
var minSize = 1;
var maxSize = 50;
var brushSizeValue = document.getElementById("brushSizeValue");

var decreaseSize_button = document.getElementById("decreaseSize");
var increaseSize_button = document.getElementById("increaseSize");


/* Sets the size of the brush */
function setBrushSize(newBrushSize) {

	if(newBrushSize < minSize)
	{
		newBrushSize = minSize;
	}
	else if(newBrushSize > maxSize)
	{
		newBrushSize = maxSize;
	}
	
	brushSize = newBrushSize;	
	context.lineWidth = brushSize * 2;
	
	if(brushSize < 10)
	{
		brushSizeValue.innerHTML = "0" + brushSize;
	}
	else
	{
		brushSizeValue.innerHTML = brushSize;
	}
		
}

/* Decreasing the size of the brush */
function decreaseBrushSize() {
	setBrushSize(brushSize - 5);
}

/* Increasing the size of the brush */
function increaseBrushSize() {
	
	if(brushSize == minSize)
	{
		setBrushSize(brushSize + 4);
	}
	else
	{
		setBrushSize(brushSize + 5);
	}
	
}


/* Brush Buttons Event Listeners */
decreaseSize_button.addEventListener("click", decreaseBrushSize);
increaseSize_button.addEventListener("click", increaseBrushSize);