var PauseState = function()
{
	this.prototype = BaseState;
}

PauseState.prototype.load = function()
{
	
}

PauseState.prototype.unload = function()
{
	
}

PauseState.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
	{
		stateManager.switchState(new GameState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_R) == true)
	{
		location.reload();
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_Q) == true)
	{
		close();
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_I) == true)
	{
		stateManager.switchState(new PauseControlsState());
	}
}

PauseState.prototype.draw = function()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var Pause = document.createElement("img");
	Pause.src = "Media/Art/PauseMenu.png";
	var center = context.measureText(Pause);
	context.drawImage(Pause, canvas.width / 2 - center.width - 30, 25);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
	var startText = "Press 'Enter' To Continue Playing";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 200);	
	
	var startText = "Press 'R' To Replay";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 240);
	
	var startText = "Press 'I' For Controls";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 280);
	
	var contText = "Press 'Q' To Quit The Game";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}