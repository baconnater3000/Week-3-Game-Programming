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

PauseState.prototype.currentState = 0;

PauseState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{
			//Resume Button
			if(player.mousePos.y >= 180 && player.mousePos.y <= 205)
			{
				if(this.currentState == "WS")
				{
					this.SpawnEnemy = true;
					stateManager.switchState(new WaveState());
					this.SpawnEnemy = false;
					stateManager.isPaused = false;
				}
				
				if(this.currentState == "GS")
				{
					stateManager.switchState(new GameState());
					stateManager.isPaused = false;
				}
				
				if(this.currentState  == "SS")
				{
					stateManager.switchState(new SurvivalState());
					stateManager.isPaused = false;
				}
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
}

PauseState.prototype.draw = function()
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);	
	
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
	context.drawImage(Pause, canvas.width / 2 - center.width * 2 - 60, 25);
	
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
	
	var contText = "Main Menu";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}
