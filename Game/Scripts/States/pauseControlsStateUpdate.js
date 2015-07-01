var PauseControlsState = function()
{
	this.prototype = BaseState;
}

PauseControlsState.prototype.load = function()
{
	
}

PauseControlsState.prototype.unload = function()
{
	
}

PauseControlsState.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.switchState(new PauseState());
	}
}

PauseControlsState.prototype.draw = function()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var Control = document.createElement("img");
	Control.src = "Media/Art/Controls.png";
	var center = context.measureText(Control);
	context.drawImage(Control, canvas.width / 2 - center.width + 50, 25);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
	var contText = "W = Forward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);
	
	contText = "A = Rotate Left";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 240);
	
	contText = "D = Rotate Right";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 280);
	
	contText = "S = Backward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 320);
	
	contText = "Space = Shoot";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 360);
	
	contText = "ESC = Pause";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 400);
	
	contText = "Left Click To Buy Upgrades";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 440);
	
	var contText = "Press 'ESC' To Go Back";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}
