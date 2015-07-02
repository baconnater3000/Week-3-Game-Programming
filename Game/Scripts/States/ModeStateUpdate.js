var ModeState = function()
{
	this.prototype = BaseState;
}

ModeState.prototype.load = function() 
{
	
}

ModeState.prototype.unload = function()
{
	
}

ModeState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 100 && player.mousePos.x <= canvas.width / 2 + 100)
		{
			//Wave Button
			if(player.mousePos.y >= 180 && player.mousePos.y <= 180 + 25)
			{
				stateManager.switchState(new WaveState());
			}
			
			//Survival Button
			if(player.mousePos.y >= 220 && player.mousePos.y <= 220 + 25)
			{
				stateManager.switchState(new SurvivalState());
			}
			
			//Multiplayer Button
			if(player.mousePos.y >= 260 && player.mousePos.y <= 260 + 25)
			{
				stateManager.switchState(new GameState());
			}
			
			//Back Button
			if(player.mousePos.y >= 300 && player.mousePos.y <= 300 + 25)
			{
				stateManager.switchState(new SplashState());
			}
		}
		player.mouseClicked = false;
	}
}

ModeState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 100, 180, 200, 25);
	context.strokeRect(canvas.width / 2 - 100, 220, 200, 25);
	context.strokeRect(canvas.width / 2 - 100, 260, 200, 25);
	context.strokeRect(canvas.width / 2 - 100, 300, 200, 25);
	*/
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/Mode.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 3 - 65, 20);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var contText = "Wave Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);

	contText = "Survival Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 240);
	
	contText = "Multiplayer Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 280);
	
	contText = "Go Back";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 320);
}