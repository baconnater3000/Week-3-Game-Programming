var ControlsState = function()
{
	this.prototype = BaseState;
}

ControlsState.prototype.load = function()
{
	
}

ControlsState.prototype.unload = function()
{
	
}

ControlsState.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		stateManager.switchState(new GameState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_BACKSPACE) == true)
	{
		stateManager.switchState(new SplashState());
	}
}

ControlsState.prototype.draw = function()
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	var Control = document.createElement("img");
	Control.src = "Media/Art/Controls.png";
	var center = context.measureText(Control);
	context.drawImage(Control, canvas.width / 2 - center.width * 2, 50);
	
	context.fillStyle = "white";
	context.font = "50px Cooper Black";
	var contText = "Player 1";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);
	
	context.font = "25px Cooper Black";
	contText = "W = Forward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 250);
	
	contText = "A = Rotate Left";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 290);
	
	contText = "D = Rotate Right";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 330);
	
	contText = "S = Backward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 370);
	
	contText = "Space = Shoot";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 410);
	
	contText = "ESC = Pause";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 450);
	
	contText = "Press 'Backspace' To Go Back Or Press 'Space' To Play";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}