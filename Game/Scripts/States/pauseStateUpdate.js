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
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{
			//Resume Button
			if(player.mousePos.y >= 180 && player.mousePos.y <= 205)
			{
				stateManager.switchState(new GameState());
			}
			
			//Replay Button
			if(player.mousePos.y >= 220 && player.mousePos.y <= 230)
			{
				location.reload();
			}
			
			//Controls Button
			if(player.mousePos.y >= 260 && player.mousePos.y <= 285)
			{
				stateManager.switchState(new PauseControlsState());
			}
			
			//Quit Button
			if(player.mousePos.y >= canvas.height - 40 && player.mousePos.y <= canvas.height - 15)
			{
				stateManager.switchState(new SplashState());
			}
		}
		player.mouseClicked = false;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
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
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 50, 180, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, 220, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, 260, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, canvas.height - 40, 100, 25);
	*/
	
	var Pause = document.createElement("img");
	Pause.src = "Media/Art/PauseMenu.png";
	var center = context.measureText(Pause);
	context.drawImage(Pause, canvas.width / 2 - center.width - 30, 25);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var contText = "Resume";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);	
	
	var contText = "Replay";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 240);
	
	var contText = "Controls";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 280);
	
	var contText = "Quit";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}